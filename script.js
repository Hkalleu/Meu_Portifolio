// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. ALTERNÂNCIA DE TEMA CLARO / ESCURO (DARK MODE)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        }
    });

    /* ==========================================================================
       2. MENU RESPONSIVO (MOBILE)
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em qualquer link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    /* ==========================================================================
       3. VALIDAÇÃO E SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura dos elementos e valores
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const mensagemInput = document.getElementById('mensagem');

        const errorNome = document.getElementById('error-nome');
        const errorEmail = document.getElementById('error-email');
        const errorMensagem = document.getElementById('error-mensagem');

        // Limpar mensagens de erro anteriores
        errorNome.textContent = '';
        errorEmail.textContent = '';
        errorMensagem.textContent = '';
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        let isValid = true;

        // Validação do Campo Nome
        if (nomeInput.value.trim() === '') {
            errorNome.textContent = 'Por favor, informe seu nome.';
            isValid = false;
        }

        // Validação do Campo E-mail (Presença e RegEx para formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            errorEmail.textContent = 'Por favor, informe seu e-mail.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            errorEmail.textContent = 'Por favor, informe um e-mail válido (ex: usuario@dominio.com).';
            isValid = false;
        }

        // Validação do Campo Mensagem
        if (mensagemInput.value.trim() === '') {
            errorMensagem.textContent = 'Por favor, digite sua mensagem.';
            isValid = false;
        }

        // Se todas as validações passarem
        if (isValid) {
            // Exibe feedback de sucesso
            formMessage.classList.add('success');
            formMessage.textContent = '✅ Mensagem enviada com sucesso! Obrigado pelo contato.';

            // Limpa o formulário
            contactForm.reset();

            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);
        }
    });

});
