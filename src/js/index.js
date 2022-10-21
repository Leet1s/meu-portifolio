const abas = document.querySelectorAll(".aba");

abas.forEach(aba =>{
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }

        const abaSelecionado = document.querySelector(".aba.selecionado");
        abaSelecionado.classList.remove("selecionado")

        aba.classList.add("selecionado")

        const informacaoSelecionado = document.querySelector(".informacao.selecionado")
        informacaoSelecionado.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada =document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    })
})