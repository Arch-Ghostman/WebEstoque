// Função para gerar o relatório em PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurações do documento
    doc.setFont('helvetica');
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    
    // Título do relatório
    doc.text('Relatório de Inventário - Checklist', 105, 15, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Gerado em: ${new Date().toLocaleDateString()}`, 105, 22, { align: 'center' });
    
    // Adicionar logo (se disponível)
    // doc.addImage(logoData, 'JPEG', 10, 10, 30, 15);
    
    let yPosition = 30;
    
    // Resumo por grupos
    doc.setFontSize(14);
    doc.text('Resumo por Grupos', 14, yPosition);
    yPosition += 10;
    
    const contagemGrupos = {};
    inventarioData.forEach(item => {
        if (!contagemGrupos[item.grupo]) {
            contagemGrupos[item.grupo] = 0;
        }
        contagemGrupos[item.grupo]++;
    });
    
    doc.setFontSize(10);
    let columnX = 14;
    let count = 0;
    
    for (const [grupo, quantidade] of Object.entries(contagemGrupos)) {
        doc.text(`${formatarGrupo(grupo)}: ${quantidade}`, columnX, yPosition);
        
        count++;
        if (count % 3 === 0) {
            yPosition += 7;
            columnX = 14;
        } else {
            columnX += 65;
        }
    }
    
    yPosition += 10;
    
    // Tabela de itens
    doc.setFontSize(14);
    doc.text('Lista de Itens do Inventário', 14, yPosition);
    yPosition += 7;
    
    // Cabeçalho da tabela
    const headers = [['ID', 'Nome', 'Grupo', 'Marca', 'Status', 'Preço Novo', 'Preço Usado']];
    
    // Dados da tabela
    const data = inventarioData.map(item => [
        item.id,
        item.nome,
        formatarGrupo(item.grupo),
        item.marca || '-',
        item.status,
        item.precoNovo ? 'R$ ' + item.precoNovo.toFixed(2) : '-',
        item.precoUsado ? 'R$ ' + item.precoUsado.toFixed(2) : '-'
    ]);
    
    doc.autoTable({
        startY: yPosition,
        head: headers,
        body: data,
        margin: { top: yPosition },
        styles: {
            fontSize: 8,
            cellPadding: 2,
            overflow: 'linebreak'
        },
        headStyles: {
            fillColor: [52, 58, 64],
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [240, 240, 240]
        },
        columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 40 },
            2: { cellWidth: 30 },
            3: { cellWidth: 30 },
            4: { cellWidth: 20 },
            5: { cellWidth: 25 },
            6: { cellWidth: 25 }
        }
    });
    
    // Salvar o PDF
    doc.save(`inventario_checklist_${new Date().toISOString().slice(0,10)}.pdf`);
}

// Função auxiliar para formatar nomes de grupos
function formatarGrupo(grupo) {
    const grupos = {
        'computadores': 'Computadores',
        'monitores': 'Monitores',
        'estabilizadores': 'Estabilizadores',
        'nobreak': 'Nobreak',
        'mouses': 'Mouses',
        'teclados': 'Teclados',
        'impressoras': 'Impressoras',
        'impressoras-fiscais': 'Impressoras Fiscais',
        'leitores-codigo': 'Leitores de Código',
        'cabos-forca': 'Cabos de Força',
        'cabos-vga': 'Cabos VGA/HDMI',
        'fontes': 'Fontes de Alimentação'
    };
    
    return grupos[grupo] || grupo;
}