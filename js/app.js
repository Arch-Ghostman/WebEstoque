document.addEventListener('DOMContentLoaded', function () {
    atualizarResumo();
    carregarItens();

    document.getElementById('btnFiltrar').addEventListener('click', filtrarItens);
    document.getElementById('btnGerarPDF').addEventListener('click', gerarRelatorioPDF);
    document.getElementById('searchInput').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') filtrarItens();
    });
});

function carregarItens(filtroGrupo = 'todos', filtroStatus = 'todos', termoBusca = '') {
    const tabela = document.getElementById('tabelaItens');
    tabela.innerHTML = '';

    let itensFiltrados = inventarioData;

    if (filtroGrupo !== 'todos') {
        itensFiltrados = itensFiltrados.filter(item => item.grupo === filtroGrupo);
    }

    if (filtroStatus !== 'todos') {
        itensFiltrados = itensFiltrados.filter(item => item.status.toLowerCase() === filtroStatus);
    }

    if (termoBusca) {
        const busca = termoBusca.toLowerCase();
        itensFiltrados = itensFiltrados.filter(item =>
            item.nome.toLowerCase().includes(busca) ||
            item.marca.toLowerCase().includes(busca) ||
            item.id.toLowerCase().includes(busca) ||
            (item.detalhes && item.detalhes.descricao && item.detalhes.descricao.toLowerCase().includes(busca))
        );
    }

    itensFiltrados.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${formatarGrupo(item.grupo)}</td>
            <td>${item.marca || '-'}</td>
            <td><span class="status-${item.status.toLowerCase()}">${item.status}</span></td>
            <td>
                <button class="btn btn-sm btn-info btn-detalhes" data-id="${item.id}">Detalhes</button>
            </td>
        `;
        tabela.appendChild(tr);
    });

    document.querySelectorAll('.btn-detalhes').forEach(btn => {
        btn.addEventListener('click', function () {
            mostrarDetalhes(this.getAttribute('data-id'));
        });
    });
}

function filtrarItens() {
    const grupo = document.getElementById('grupoSelect').value;
    const status = document.getElementById('statusSelect').value;
    const busca = document.getElementById('searchInput').value;

    carregarItens(grupo, status, busca);
}

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
        'fontes': 'Fontes de Alimentação',
        'noeblaks': 'Notebooks'
    };

    return grupos[grupo] || grupo;
}

function mostrarDetalhes(itemId) {
    const item = inventarioData.find(i => i.id === itemId);
    if (!item) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '';

    let html = `
        <div class="detail-section">
            <h4>${item.nome} <small class="text-muted">(${item.id})</small></h4>
            <p><strong>Grupo:</strong> ${formatarGrupo(item.grupo)}</p>
            <p><strong>Marca:</strong> ${item.marca || 'Desconhecida'}</p>
            <p><strong>Status:</strong> <span class="status-${item.status.toLowerCase()}">${item.status}</span></p>
    `;

    if (item.imagem) {
        html += `<img src="images/${item.imagem}" alt="${item.nome}" class="item-img img-thumbnail">`;
    }

    html += `</div>`;

    if (item.precoNovo || item.precoUsado) {
        html += `
            <div class="detail-section">
                <h5>Valores</h5>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Preço Novo</th>
                            <th>Preço Usado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${item.precoNovo ? 'R$ ' + item.precoNovo.toFixed(2) : '-'}</td>
                            <td>${item.precoUsado ? 'R$ ' + item.precoUsado.toFixed(2) : '-'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    if (item.detalhes) {
        html += `<div class="detail-section"><h5>Especificações</h5>`;

        if (item.grupo === 'computadores' || item.grupo === 'noeblaks') {
            html += `
                <table class="specs-table table table-bordered">
                    <tr>
                        <th>Placa Mãe:</th>
                        <td>${item.detalhes.placaMae?.fabricante || '-'} ${item.detalhes.placaMae?.modelo || ''} ${item.detalhes.placaMae?.socket || ''}</td>
                    </tr>
                    <tr>
                        <th>Processador:</th>
                        <td>${item.detalhes.processador?.fabricante || '-'} ${item.detalhes.processador?.modelo || ''}</td>
                    </tr>
                    <tr>
                        <th>Memória RAM:</th>
                        <td>${item.detalhes.ram?.tamanho || '-'}GB ${item.detalhes.ram?.frequencia || ''}</td>
                    </tr>
                    <tr>
                        <th>Armazenamento:</th>
                        <td>${item.detalhes.ssd?.fabricante || '-'} ${item.detalhes.ssd?.tamanho || '-'}GB (Saúde: ${item.detalhes.ssd?.saude || '-'}%)</td>
                    </tr>
                    <tr>
                        <th>Sistema Operacional:</th>
                        <td>${item.detalhes.software?.so || '-'} ${item.detalhes.software?.versao || ''}</td>
                    </tr>
                </table>
            `;
        } else if (item.detalhes.especificacoes) {
            html += `<table class="specs-table table table-bordered">`;
            for (const [key, value] of Object.entries(item.detalhes.especificacoes)) {
                html += `
                    <tr>
                        <th>${key}:</th>
                        <td>${value}</td>
                    </tr>
                `;
            }
            html += `</table>`;
        }

        if (item.detalhes.observacoes) {
            html += `
                <div class="alert alert-warning mt-3">
                    <strong>Observações:</strong> ${item.detalhes.observacoes}
                </div>
            `;
        }

        html += `</div>`;
    }

    modalBody.innerHTML = html;

    const modal = new bootstrap.Modal(document.getElementById('detalhesModal'));
    modal.show();
}

function atualizarResumo() {
    const resumoContainer = document.getElementById('resumoInventario');
    resumoContainer.innerHTML = '';

    const todosGrupos = {
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
        'fontes': 'Fontes de Alimentação',
        'balancas': 'balancas'
    };

    const contagem = {};
    for (const grupo in todosGrupos) {
        contagem[grupo] = 0;
    }

    inventarioData.forEach(item => {
        if (contagem.hasOwnProperty(item.grupo)) {
            contagem[item.grupo]++;
        }
    });

    for (const [grupo, quantidade] of Object.entries(contagem)) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${todosGrupos[grupo]}
            <span class="badge bg-primary rounded-pill badge-count">${quantidade}</span>
        `;
        resumoContainer.appendChild(li);
    }
}

function gerarRelatorioPDF() {
    generatePDF(); // Assume que você tem essa função fora do escopo
}
