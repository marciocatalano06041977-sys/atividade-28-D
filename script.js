// 1. Lista de usuários, cada um com permissões para seu setor
const usuarios = [
    {
        nome: "Ana Paula",
        setor: "vendas",
        cargo: "Consultora de Vendas",
        permissoes: ["vendas", "clientes"]
    },
    {
        nome: "Lucas Mendes",
        setor: "relatorios",
        cargo: "Analista de BI",
        permissoes: ["relatorios", "dashboards"]
    },
    {
        nome: "Rafael Silva",
        setor: "estoque",
        cargo: "Supervisor de Estoque",
        permissoes: ["estoque", "fornecedores"]
    },
    {
        nome: "Fernanda Costa",
        setor: "admin",
        cargo: "Gerente Geral",
        permissoes: ["vendas", "relatorios", "estoque", "admin"]
    }
];

// 2. Exibe todos os usuários e suas permissões
for (let i = 0; i < usuarios.length; i = i + 1) {
    const user = usuarios[i];
    console.log("=== Usuário: " + user.nome + " | Setor: " + user.setor + " ===");

    for (let j = 0; j < user.permissoes.length; j = j + 1) {
        const perm = user.permissoes[j];
        console.log("- Acesso liberado: " + perm);

        if (perm === "admin") {
            console.log("Atenção: Usuário com privilégios totais!");
        }
    }
}

// 3. Simulação: usuário do setor "vendas" tentando acessar "relatorios"
const usuarioVendas = usuarios[0]; // Ana Paula (setor: "vendas")
const setorSolicitado = "relatorios";
let temAcesso = false;

for (let k = 0; k < usuarioVendas.permissoes.length; k = k + 1) {
    if (usuarioVendas.permissoes[k] === setorSolicitado) {
        temAcesso = true;
    }
}

console.log("\n--- Tentativa de Acesso ---");
if (temAcesso) {
    console.log("Acesso permitido: " + usuarioVendas.nome + " entrou no setor '" + setorSolicitado + "'.");
} else {
    console.log(
        "Acesso NEGADO: " +
        usuarioVendas.nome +
        " (setor " +
        usuarioVendas.setor +
        ") não tem permissão para acessar '" +
        setorSolicitado +
        "'."
    );
}
