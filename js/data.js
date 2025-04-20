const inventarioData = [
    {
        id: "HOST-01",
        nome: "Servidor",
        grupo: "computadores",
        marca: "ThinkSystem",
        status: "BOM",
        precoNovo: 4500.00,
        precoUsado: 3200.00,
        imagem: "../img/server.jpg",
        detalhes: {
            placaMae: {
                fabricante: "LENOVO I3X0MS |",
                modelo: "Modelo: I3X0MS |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1155",
                formato: "MICRO ATX",
                bios: "x"
            },
            processador: {
                fabricante: "INTEL XEON | ",
                modelo: "Modelo: E-2224G | Frequencia: 3.5GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.5GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "1200Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "KINGSTON",
                velocidade: "SATA/600Mb",
                tamanho: "120GB",
                saude: "100",
                status: "BOM"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "SSD com saúde em 100%, considerado BOM."
        }
    },
    // host 02
    {
        id: "HOST-02",
        nome: "Desktop",
        grupo: "computadores",
        marca: "Multilaser",
        status: "BOM",
        precoNovo:  899.00,
        precoUsado: 600.00,
        imagem: "../img/host02.jpg",
        detalhes: {
            placaMae: {
                fabricante: "GIGABYTE |",
                modelo: "Modelo: GA-H110M-S2PH |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL",
                modelo: "I3 7100 | Frequencia: 3.5GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.5GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "1200Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "KINGSTON",
                velocidade: "SATA/600Mb",
                tamanho: "120GB",
                saude: "69",
                status: "RUIM"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "SSD com saúde em 69%, considerado ruim."
        }
    },
    {
        id: "HOST-03",
        nome: "Desktop",
        grupo: "computadores",
        marca: "Mix Tech",
        status: "BOM",
        precoNovo:  1200.00,
        precoUsado: 800.00,
        imagem: "../img/HOST03.jpg",
        detalhes: {
            placaMae: {
                fabricante: "Pcware |",
                modelo: "IMPH310 PRO |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL |",
                modelo: "Pentium G4560 | Frequencia: 3.5GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.5GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "1200Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "KINGSTON",
                velocidade: "SATA/600Mb",
                tamanho: "120GB",
                saude: "87",
                status: "MEDIANO"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "SSD com saúde em 87%, considerado MEDIANO."
        }
    },
    {
        id: "HOST-04",
        nome: "Desktop",
        grupo: "computadores",
        marca: "Mix Tech",
        status: "BOM",
        precoNovo:  1200.00,
        precoUsado: 800.00,
        imagem: "../img/HOST04.jpg",
        detalhes: {
            placaMae: {
                fabricante: "ATA |",
                modelo: "IPMH310G |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL |",
                modelo: "Pentium G5420 | Frequencia: 3.8GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.8GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "1200Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "PATRIOT BURST",
                velocidade: "SATA/6Gbs",
                tamanho: "120GB",
                saude: "99",
                status: "BOM"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "SSD com saúde em 99%, considerado BOM."
        }
    },
    {
        id: "HOST-05",
        nome: "Desktop",
        grupo: "computadores",
        marca: "Mix Tech",
        status: "MEDIANO",
        precoNovo:  1200.00,
        precoUsado: 800.00,
        imagem: "../img/HOST04.jpg",
        detalhes: {
            placaMae: {
                fabricante: "ATA |",
                modelo: "IPMH310G |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL |",
                modelo: "Pentium G5420 | Frequencia: 3.8GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.8GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "1200Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "PATRIOT BURST",
                velocidade: "SATA/6Gbs",
                tamanho: "120",
                saude: "99",
                status: "BOM"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "AUXENCIA DE COOLER."
            
        }
    },
    {
        id: "HOST-06",
        nome: "Desktop",
        grupo: "computadores",
        marca: "Mix Tech",
        status: "RUIM",
        precoNovo:  1200.00,
        precoUsado: 800.00,
        imagem: "../img/HOST04.jpg",
        detalhes: {
            placaMae: {
                fabricante: "TCN |",
                modelo: "DESCONHECIDO |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL |",
                modelo: "Pentium G4560 | Frequencia: 3.5GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.5GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "2666Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "KINGSTON",
                velocidade: "SATA/600Mbs",
                tamanho: "120",
                saude: "99",
                status: "BOM"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "SSD com saúde em 99%, considerado BOM."
            
        }
    },

    {
        id: "HOST-07",
        nome: "Desktop",
        grupo: "computadores",
        marca: "Mix Tech",
        status: "MEDIANO",
        precoNovo:  1200.00,
        precoUsado: 800.00,
        imagem: "../img/HOST04.jpg",
        detalhes: {
            placaMae: {
                fabricante: "DESCONHECIDO |",
                modelo: "DESCONHECIDO |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL |",
                modelo: "Pentium G4560 | Frequencia: 3.5GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.5GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "2666Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "KINGSTON",
                velocidade: "SATA/600Mbs",
                tamanho: "120",
                saude: "99",
                status: "BOM"
            },
            software: {
                so: "WIN 10 PRO",
                versao: "",
                ativacao: "NÃO",
                office: "NÃO",
                drives: "SIM"
            },
            observacoes: "DEFEITO NA FONTE ATX / NESCESSITA DE VISTORIA."
            
        }
    },
    {
        id: "HOST-08",
        nome: "CPU/PDV",
        grupo: "computadores",
        marca: "Sweda",
        status: "BOM",
        precoNovo:  899.00,
        precoUsado: 600.00,
        imagem: "../img/HOST04.jpg",
        detalhes: {
            placaMae: {
                fabricante: "TCN |",
                modelo: "DESCONHECIDO |",
                precoNovo: 664.40,
                socket: "Socket: LGA 1151",
                formato: "MICRO ATX",
                bios: "AMI"
            },
            processador: {
                fabricante: "INTEL |",
                modelo: "Celeron | Frequencia: 3.5GHz",
                descricao: "7ª Geração (2017)",
                frequencia: "3.5GHz",
                nucleosThreads: "2 / 4"
            },
            ram: {
                fabricante: "Desconhecido",
                frequencia: "2666Mhz",
                tamanho: "4",
                transferencia: "1600Mb/s"
            },
            ssd: {
                fabricante: "X",
                velocidade: "X",
                tamanho: "X",
                saude: "X",
                status: "X"
            },
            software: {
                so: "x",
                versao: "",
                ativacao: "x",
                office: "x",
                drives: "x"
            },
            observacoes: "NÃO FOI ENCONTRADO ARMAZENAMENTO."
            
        }
    },
    {
        id: "MOUSE-01",
        nome: "Mouse 01",
        grupo: "mouses",
        marca: "5 ITENS",
        status: "MEDIANO",
        precoNovo: 0,
        precoUsado: 0,
        imagem: "../img/MOUSE.jpg",
        detalhes: {
            observacoes: "APENAS UM MOUSE APRENSOU DEFEITO."
        }
    },
    {
        id: "TECLADOS-01",
        nome: "TECLADOS 01",
        grupo: "teclados",
        marca: "5 ITENS",
        status: "MEDIANO",
        precoNovo: 0,
        precoUsado: 0,
        imagem: "../img/teclados.jpg",
        detalhes: {
            observacoes: "SEM DEFEITE, POREM COM MUITO DESGASTE."
        }
    },
    {
        id: "CABOS-01",
        nome: "CABOS 01",
        grupo: "cabos-forca",
        marca: "15 ITENS",
        status: "BOM",
        precoNovo: 0,
        precoUsado: 0,
        imagem: "../img/CABO.jpg",
        detalhes: {
            observacoes: "SEM DEFEITE."
        }
    },
    {
        id: "CABO-VGA 01",
        nome: "CABOS 01",
        grupo: "cabos-vga",
        marca: "2 ITENS",
        status: "BOM",
        precoNovo: 0,
        precoUsado: 0,
        imagem: "../img/VGA.jpg",
        detalhes: {
            observacoes: "SEM DEFEITE."
        }
    },
    {
        id: "FONTES 01",
        nome: "CABOS 01",
        grupo: "fontes",
        marca: "8 ITENS",
        status: "BOM",
        precoNovo: 0,
        precoUsado: 0,
        imagem: "../img/FONTE.jpg",
        detalhes: {
            observacoes: "SEM DEFEITE."
        }
    },
    {
        id: "LEITOR-01",
        nome: "Leitor de Código 01",
        grupo: "leitores-codigo",
        marca: "YOUJIE",
        status: "Ruim",
        precoNovo: 136.74,
        precoUsado: 16.74,
        imagem: "../img/leitor01.jpg",
        detalhes: {
            especificacoes: {
                tipo: "Leitor de Código de Barras",
                conexao: "USB",
                modelo: "YJ-5000"
            },
            observacoes: "Apresenta defeitos significativos: mau funcionamento do scanner e ausência do botão ativador."
        }
    },
    {
        id: "LEITOR-02",
        nome: "Leitor de Código 02",
        grupo: "leitores-codigo",
        marca: "BEMATECH",
        status: "BOM",
        precoNovo: 220.74,
        precoUsado: 160.74,
        imagem: "../img/leitor02.jpg",
        detalhes: {
            especificacoes: {
                tipo: "Leitor de Código de Barras",
                conexao: "USB",
                modelo: "BR-400"
            },
            observacoes: "SEM DEFEITOS, APENAS DESGASTES NO DEVIDO AO USO."
        }
    },
    {
        id: "LEITOR-03",
        nome: "Leitor de Código 03",
        grupo: "leitores-codigo",
        marca: "ELGIN FLASH",
        status: "BOM",
        precoNovo: 180.00,
        precoUsado: 160.74,
        imagem: "../img/LEITOR03.jpg",
        detalhes: {
            especificacoes: {
                tipo: "Leitor de Código de Barras",
                conexao: "USB",
                modelo: "X"
            },
            observacoes: "SEM DEFEITOS, APENAS DESGASTES NO DEVIDO AO USO."
        }
    },
    {
        id: "LEITOR-04",
        nome: "Leitor de Código 04",
        grupo: "leitores-codigo",
        marca: "ELGIN FLASH",
        status: "BOM",
        precoNovo: 180.00,
        precoUsado: 160.74,
        imagem: "../img/LEITOR04.jpg",
        detalhes: {
            especificacoes: {
                tipo: "Leitor de Código de Barras",
                conexao: "USB",
                modelo: "X"
            },
            observacoes: "SEM DEFEITOS, APENAS DESGASTES NO DEVIDO AO USO."
        }
    },

        {
            id: "MONITOR-01",
            nome: "Monitor Samsung 21.5''",
            grupo: "monitores",
            marca: "Samsung",
            status: "RUIM",
            precoNovo: 599.00,
            precoUsado: 30.00,
            imagem: "../img/monitor01.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "19.5 polegadas",
                    resolucao: "1366 x 768",
                    conexoes: "VGA, HDMI",
                    modelo: "LS19TWSUVLZD"
                },
                observacoes: "Tela com muito desgaste do sol, com riscos ou manchas."
            }
        },
        {
            id: "MONITOR-02",
            nome: "Monitor AOC 18.5''",
            grupo: "monitores",
            marca: "AOC",
            status: "BOM",
            precoNovo: 650.00,
            precoUsado: 400.00,
            imagem: "../img/monitor02.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "18.5 polegadas",
                    resolucao: "1366 x 768",
                    conexoes: "HDMI, VGA",
                    modelo: "E970SW"
                },
                observacoes: "SEM DEFEITOS"
            }
        },
        {
            id: "MONITOR-03",
            nome: "Monitor AOC 21.5''",
            grupo: "monitores",
            marca: "AOC",
            status: "BOM",
            precoNovo: 650.00,
            precoUsado: 400.00,
            imagem: "../img/monitor03.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "21.5 polegadas",
                    resolucao: "1920 x 1080",
                    conexoes: "HDMI, VGA",
                    modelo: "E970SWNL"
                },
                observacoes: "VENDIDO"
            }
        },
        {
            id: "MONITOR-04",
            nome: "Monitor Brazil pc 19.5''",
            grupo: "monitores",
            marca: "Brazil pc",
            status: "BOM",
            precoNovo: 271.71,
            precoUsado: 150.00,
            imagem: "../img/monitor04.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "21.5 polegadas",
                    resolucao: "1920 x 1080",
                    conexoes: "HDMI, VGA",
                    modelo: "E970SWNL"
                },
                observacoes: "VENDIDO"
            }
        },
        {
            id: "MONITOR-05",
            nome: "Monitor Samsung 21.5''",
            grupo: "monitores",
            marca: "Samsung",
            status: "BOM",
            precoNovo: 500.71,
            precoUsado: 350.00,
            imagem: "../img/monitor05.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "21.5 polegadas",
                    resolucao: "1920 x 1080",
                    conexoes: "HDMI, VGA",
                    modelo: "S19E310HY"
                },
                observacoes: "DEFEITO NO SUPORTE FIXADOR"
            }
        },
        {
            id: "MONITOR-06",
            nome: "Monitor AOC 14.5''",
            grupo: "monitores",
            marca: "AOC",
            status: "BOM",
            precoNovo: 500.71,
            precoUsado: 350.00,
            imagem: "../img/monitor06.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "14.5 polegadas",
                    resolucao: "1920 x 1080",
                    conexoes: "HDMI, VGA",
                    modelo: "S19E310HY"
                },
                observacoes: "SEM DEFEITO"
            }
        },
        {
            id: "MONITOR-07",
            nome: "Monitor AOC 21.5''",
            grupo: "monitores",
            marca: "AOC",
            status: "BOM",
            precoNovo: 500.71,
            precoUsado: 350.00,
            imagem: "../img/monitor07.jpg",
            detalhes: {
                especificacoes: {
                    tipo: "LED",
                    tamanho: "21.5 polegadas",
                    resolucao: "800 x 750",
                    conexoes: "HDMI, VGA",
                    modelo: "S19E310HY"
                },
                observacoes: "SEM DEFEITO"
            }
        },
        {
            id: "NOBREAK-01",
            nome: "Nobreak Interbras",
            grupo: "nobreak",
            marca: "Interbras",
            status: "BOM",
            precoNovo: 0,
            precoUsado: 0,
            imagem: "../img/no01.jpg",
            detalhes: {
                especificacoes: {
                    potencia: "1200VA",
                    tensaoEntrada: "115/127/220V",
                    tensaoSaida: "115V",
                    tempoAutonomia: "20 minutos",
                    tipoBateria: "Selada, chumbo-ácida, 12V",
                    quantidadeBaterias: 2
                },
                observacoes: "Baterias mediana."
            }
        },
        {
            id: "NOBREAK-02",
            nome: "Nobreak Interbras",
            grupo: "nobreak",
            marca: "Interbras",
            status: "BOM",
            precoNovo: 0,
            precoUsado: 0,
            imagem: "../img/no02.jpg",
            detalhes: {
                especificacoes: {
                    potencia: "1200VA",
                    tensaoEntrada: "115/127/220V",
                    tensaoSaida: "115V",
                    tempoAutonomia: "20 minutos",
                    tipoBateria: "Selada, chumbo-ácida, 12V",
                    quantidadeBaterias: 2
                },
                observacoes: "Baterias mediana."
            }
        },
        {
            id: "NOBREAK-03",
            nome: "Nobreak Interbras",
            grupo: "nobreak",
            marca: "Interbras",
            status: "BOM",
            precoNovo: 0,
            precoUsado: 0,
            imagem: "../img/no03.jpg",
            detalhes: {
                especificacoes: {
                    potencia: "1200VA",
                    tensaoEntrada: "115/127/220V",
                    tensaoSaida: "115V",
                    tempoAutonomia: "20 minutos",
                    tipoBateria: "Selada, chumbo-ácida, 12V",
                    quantidadeBaterias: 2
                },
                observacoes: "Baterias mediana."
            }
        },
        {
            id: "IMP-01",
            nome: "Impressora EPSON",
            grupo: "impressoras",
            marca: "EPSON",
            status: "BOM",
            precoNovo: 480.00,
            precoUsado: 280.00,
            imagem: "../img/impressora_deskjet.jpg",
            detalhes: {
                especificacoes: {
                    tipoImpressao: "Jato de Tinta",
                    resolucao: "1200 x 1200 dpi",
                    conectividade: "USB, Wi-Fi",
                    funcoes: "Imprimir, Copiar, Digitalizar",
                    compatibilidade: "Windows, macOS"
                },
                observacoes: "SEM DEFEITO."
            }
        },
        {
        id: "IMP-FISCAL-01",
        nome: "Impressora Fiscal Bematech TM-T900F",
        grupo: "impressoras-fiscais",
        marca: "Bematech",
        status: "BOM",
        precoNovo: 0.00,
        precoUsado: 0.00,
        imagem: "../img/imp01.jpg",
        detalhes: {
            especificacoes: {
                tipoImpressao: "Térmica Direta",
                velocidadeImpressao: "150 mm/s",
                resolucao: "203 dpi",
                larguraPapel: "80mm",
                conexoes: "USB, Serial",
                lacreFiscal: "Presente"
            },
            observacoes: "SEM DEFEITO."
        }
    },
    {
        id: "IMP-FISCAL-02",
        nome: "Impressora Fiscal Bematech TM-T900F",
        grupo: "impressoras-fiscais",
        marca: "Bematech",
        status: "BOM",
        precoNovo: 0.00,
        precoUsado: 0.00,
        imagem: "../img/imp01.jpg",
        detalhes: {
            especificacoes: {
                tipoImpressao: "Térmica Direta",
                velocidadeImpressao: "150 mm/s",
                resolucao: "203 dpi",
                larguraPapel: "80mm",
                conexoes: "USB, Serial",
                lacreFiscal: "Presente"
            },
            observacoes: "SEM DEFEITO."
        }
    },
    {
        id: "BAL-01",
        nome: "Balança Eletrônica Prix 4 Uno",
        grupo: "balancas",
        marca: "PRIX",
        status: "BOM",
        precoNovo: 2200.00,
        precoUsado: 1400.00,
        imagem: "../img/balanca_prix4.jpg",
        detalhes: {
            especificacoes: {
                capacidadeMaxima: "30kg",
                divisao: "5g",
                tipoDisplay: "Display de Cristal Líquido (LCD)",
                alimentacao: "Bivolt (automática)",
                conectividade: "Porta serial RS-232",
                plataforma: "Aço inoxidável"
            },
            observacoes: "SEM DEFEITO."
        }
    },
    {
        id: "BAL-02",
        nome: "Balança Eletrônica Prix 4 Uno",
        grupo: "balancas",
        marca: "PRIX",
        status: "BOM",
        precoNovo: 2200.00,
        precoUsado: 1400.00,
        imagem: "../img/balanca_prix.jpg",
        detalhes: {
            especificacoes: {
                capacidadeMaxima: "30kg",
                divisao: "5g",
                tipoDisplay: "Display de Cristal Líquido (LCD)",
                alimentacao: "Bivolt (automática)",
                conectividade: "Porta serial RS-232",
                plataforma: "Aço inoxidável"
            },
            observacoes: "SEM DEFEITO."
        }
    },
    {
        id: "EST-01",
        nome: "Estabilizador NHS 700VA",
        grupo: "estabilizadores",
        marca: "NHS",
        status: "BOM",
        precoNovo: 200.00,
        precoUsado: 120.00,
        imagem: "../img/sta01.jpg",
        detalhes: {
            especificacoes: {
                potencia: "700VA",
                tensaoEntrada: "115/127/220V (automático)",
                tensaoSaida: "115V",
                tomadas: "4 tomadas padrão NBR 14136",
                protecoes: "Contra sobrecarga, surtos de tensão e curto-circuito",
                tempoResposta: "10ms"
            },
            observacoes: "SEM DEFEITO."
        }
    },
    {
        id: "EST-02",
        nome: "Estabilizador NHS 700VA",
        grupo: "estabilizadores",
        marca: "NHS",
        status: "BOM",
        precoNovo: 200.00,
        precoUsado: 120.00,
        imagem: "../img/sta01.jpg",
        detalhes: {
            especificacoes: {
                potencia: "700VA",
                tensaoEntrada: "115/127/220V (automático)",
                tensaoSaida: "115V",
                tomadas: "4 tomadas padrão NBR 14136",
                protecoes: "Contra sobrecarga, surtos de tensão e curto-circuito",
                tempoResposta: "10ms"
            },
            observacoes: "SEM DEFEITO."
        }
    }     
        
    // Adicione os demais itens seguindo o mesmo padrão
];