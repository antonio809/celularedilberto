document.addEventListener("DOMContentLoaded", () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Cadastro
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const senhaInput = document.getElementById("senha");
        const confirmarSenhaInput = document.getElementById("confirmarSenha");

        const nomeErro = document.getElementById("nomeErro");
        const emailErro = document.getElementById("emailErro");
        const senhaErro = document.getElementById("senhaErro");
        const confirmarSenhaErro = document.getElementById("confirmarSenhaErro");
        const mensagemCadastro = document.getElementById("mensagemCadastro");

        cadastroForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Resetando mensagens de erro
            nomeErro.textContent = "";
            emailErro.textContent = "";
            senhaErro.textContent = "";
            confirmarSenhaErro.textContent = "";
            mensagemCadastro.textContent = "";

            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();
            const senha = senhaInput.value;
            const confirmarSenha = confirmarSenhaInput.value;

            let formularioValido = true;

            // Validação do nome
            if (nome.length < 3) {
                nomeErro.textContent = "O nome deve ter pelo menos 3 caracteres.";
                formularioValido = false;
            }

            // Validação do e-mail
            const emailExiste = usuarios.some((user) => user.email === email);
            if (!email.includes("@") || !email.includes(".")) {
                emailErro.textContent = "Insira um e-mail válido.";
                formularioValido = false;
            } else if (emailExiste) {
                emailErro.textContent = "Este e-mail já está cadastrado.";
                formularioValido = false;
            }

            // Validação da senha
            if (senha.length < 6) {
                senhaErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
                formularioValido = false;
            }

            // Validação da confirmação de senha
            if (senha !== confirmarSenha) {
                confirmarSenhaErro.textContent = "As senhas não coincidem.";
                formularioValido = false;
            }

            // Se o formulário estiver válido, salva o usuário
            if (formularioValido) {
                usuarios.push({ nome, email, senha });
                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                mensagemCadastro.textContent = "Cadastro realizado com sucesso!";
                mensagemCadastro.style.color = "green";

                cadastroForm.reset();
            } else {
                mensagemCadastro.textContent = "Corrija os erros antes de prosseguir.";
                mensagemCadastro.style.color = "red";
            }
        });
    }

    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const emailLoginInput = document.getElementById("emailLogin");
        const senhaLoginInput = document.getElementById("senhaLogin");

        const emailLoginErro = document.getElementById("emailLoginErro");
        const senhaLoginErro = document.getElementById("senhaLoginErro");
        const mensagemLogin = document.getElementById("mensagemLogin");

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Resetando mensagens de erro
            emailLoginErro.textContent = "";
            senhaLoginErro.textContent = "";
            mensagemLogin.textContent = "";

            const emailLogin = emailLoginInput.value.trim();
            const senhaLogin = senhaLoginInput.value;

            const usuarioValido = usuarios.find(
                (user) => user.email === emailLogin && user.senha === senhaLogin
            );

            if (!usuarioValido) {
                mensagemLogin.textContent = "E-mail ou senha incorretos.";
                mensagemLogin.style.color = "red";
            } else {
                mensagemLogin.textContent = `Bem-vindo(a), ${usuarioValido.nome}!`;
                mensagemLogin.style.color = "green";

                // Redirecionar ou executar uma ação adicional após o login bem-sucedido
                setTimeout(() => {
                    window.location.href = "paginainicial.html"; //é pra substituir pela prr da página inicial do site.
                }, 1000); // espera 1 segundo antes de clicar a porra do botão.
            }

        });
    }
});

// sistema de cadastro e login nesse único arquivo.