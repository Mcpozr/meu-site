let elementoCriado1 = false;
let elementoCriado = false;
let elementoCriado2 = false; // Variável de controle.
let selecionado = false;
let selecionado1 = false;
let selecionado2 = false;
let primeiroValor = 0;
let elementoCriado4 = false;
let uni = false;
let uni1 = false;
let uni2 = false;
let com = false;

function chekar(){
    
    let linkarCheckbox = document.getElementById("linkar"); 
    let valorFinal = document.getElementById("valorFinal");
    let borda = document.getElementById("borda");
    
    linkarCheckbox.addEventListener('change', function() {
    if (this.checked) {
        elementoCriado4 = true;
        borda.className = "selecionado"
        if(selecionado == true && uni == false && primeiroValor == 50){     //Executa o desconto quando é clicado o checkbox e também transforma a variável   
            primeiroValor  = primeiroValor - (primeiroValor * 0.1);        //elementoCriado em true, assim liberando o botão de pagamento.
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni = true;
        }
        if(selecionado1 == true && uni1 == false && primeiroValor == 100){
            primeiroValor  = primeiroValor - (primeiroValor * 0.15);
            valorFinal.innerHTML ="R$" + primeiroValor + ",00"
            uni1 = true;
        }
        if(selecionado2 == true && uni2 == false && primeiroValor == 250){
            primeiroValor  = primeiroValor - (primeiroValor * 0.2);
            valorFinal.innerHTML ="R$" + primeiroValor + ",00"
            uni2 = true;
        }
    } else {
        elementoCriado4 = false;
        borda.className = "pagamentoAvista"

        if(primeiroValor == 45){
            primeiroValor = 50;
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"             //Volta o valor à origem quando é desmarcado o checkbox  
            uni = false;                                              // e também transforma a variável elementoCriado em false,assim bloqueando a compra 
        }
        else if (primeiroValor == 85){                              //com base na variável primeiroValor.
            primeiroValor = 100;
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni1 = false;
        }
        else if (primeiroValor == 200){
            primeiroValor = 250;
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni2 = false;
        }
    }
    });
}


function obterNumeroData() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    let nome = document.getElementById("nome").value;
    let nomes = document.getElementById("nome");
    let idade = document.getElementById("idade").value;
    let estilo = document.getElementById("idade");
    let data = document.getElementById("dia").value;
    let dataAno = document.getElementById("ano").value;
    let datas = document.getElementById("dia");
    let dataAnos = document.getElementById("ano");
    let cvv = document.getElementById("cvv");
    let cvvs = document.getElementById("cvv").value;
    
    cvv.className = "";
    datas.className = "dias";
    nomes.className = "";               //Altera a classe das variáveis responsáveis pelo formulário.
    dataAnos.className = "dias";
    estilo.className = "";
    if (!nome) {
            if(!elementoCriado){
                criarElemento();                    //Se nenhum valor incorreto for definido, a classe será trocada, mudando assim a cor do input. 
            }                                     //para vermelho
            
        nomes.className = "trocar";
    } else if (dataAno < anoAtual || dataAno > 2090) {
            if (!elementoCriado) {
                dataInvalida();
        }
        dataAnos.className = "data";
    }                                                       //e também cria um elemento <p> com o texto 'Inválido' por meio da função dataInvalida.
    else if (data > 12 || data == "" || data < 0 ) {
            if (!elementoCriado) {
                dataInvalida();
        }
        datas.className = "data";
    }
    else if (!idade) {
            if (!elementoCriado) {
                criarElemento();
        }
        estilo.className = "trocar";
    }
    else if (!cvvs) {
        if (!elementoCriado) {
            criarElemento();
    }
    cvv.className = "trocar";
}else{
    img();                                      //Cria a imagem do cartão se nenhum dos if for acionado e remove o texto de inválido.
    remove();
}
    

}
function criarElemento() {
    if (!elementoCriado) {
        let elemento = document.getElementById("rato");             //Cria o elemento do formulário escrito inválido.
        let cover = document.createElement("p");
        cover.innerHTML = "invalido";
        cover.className = "corLetra";
        elemento.appendChild(cover);
        elementoCriado = true; 
    }
}

function remove() {
    let elementoPai = document.getElementById("rato");
    let elementoFilho = elementoPai.querySelector("p");         //Remove um elemento criado do formulário.
    elementoPai.removeChild(elementoFilho);    
}
function primeiroPlano() {
    /*selecionado1 = true;
    selecionado2 = true;
    atualizaSelecionados();*/
    if (!selecionado) {
        let no = document.getElementById("preco1");         //Cria um elemento abaixo dos planos de assinatura.       
        let si = document.createElement("p");
        si.innerHTML = "adicionado";
        no.appendChild(si);
        selecionado = true;
        si.className = "pBaixo"
    }
    let produ = document.getElementById("produ");                       //Troca o valor da caixa de pagamentos e também muda o nome do plano.
    primeiroValor = 50;
    let valorFinal = document.getElementById("valorFinal");             //Adiciona o valor à variável de preço dos planos.
    valorFinal.innerHTML = "R$" + primeiroValor + ",00";
    produ.innerHTML = "Plano Basic"
    uni = false;
    
}
function segundoPlano() {
    
    if (!selecionado1) {
        let no = document.getElementById("preco2");
        let si = document.createElement("p");                       //Altera o valor com base no plano médio, transformando a variável em 100 quando
        si.innerHTML = "adicionado";                                //clicado.
        no.appendChild(si);
        si.className = "pBaixo"
        selecionado1 = true; 
    }
        let produ = document.getElementById("produ");
        primeiroValor = 100;
        let valorFinal = document.getElementById("valorFinal");
        valorFinal.innerHTML = "R$" + primeiroValor + ",00";
        produ.innerHTML = "Plano Médio"
        uni1 = false;
}

function terceiroPlano(){
if (!selecionado2) {
    let no = document.getElementById("preco3");
    let si = document.createElement("p");
    si.innerHTML = "adicionado";
    no.appendChild(si);                         //Transforma a variável de preço em 250.
    selecionado2 = true; 
    si.className = "pBaixo"
}
    let produ = document.getElementById("produ");
    produ.innerHTML = "Plano Premium"
    primeiroValor = 250;
    let valorFinal = document.getElementById("valorFinal");
    valorFinal.innerHTML = "R$" + primeiroValor + ",00";
    uni2 = false;
}
function dataInvalida() {
    if (!elementoCriado) {
        let elemento = document.getElementById("rato");
        let cover = document.createElement("p");                    //Imprime o texto quando se erra a data de validade do cartão.
        cover.innerHTML = "Data Invalida";
        cover.className = "corLetra";
        elemento.appendChild(cover);
        elementoCriado = true; 
    }
}
function img() {
    let nomeCartao = document.getElementById("nome").value;
    let dataCatao = document.getElementById("ano").value;               //Cria a imagem do cartão.
    let dataCataoDia = document.getElementById("dia").value;
    let imagem = document.createElement("img");
    let nomeCard = document.createElement("p");
    let nomeCard1 = document.createElement("p");
    let div = document.getElementById("imagem");
    let evilDiv = document.createElement("div");
    
    
    evilDiv.className = "imagem1";
    
    let checkboxes = document.getElementsByClassName("checkbox-cartao");

    
    for (var i = 0; i < checkboxes.length; i++) {      // Loop para desmarcar todos os checkboxes de cartao repetidos
        checkboxes[i].checked = false;
    }

    let selecionarCard = document.createElement("input");
    
    selecionarCard.type = "checkbox";
    selecionarCard.className = "checkbox-cartao";
    selecionarCard.id = "cheCartao";

    div.className= "back1"
    
    let linkarCheckbox = document.getElementById("linkar");
    let valorFinal = document.getElementById("valorFinal");
    let borda = document.getElementById("borda")
    
    linkarCheckbox.addEventListener('change', function() {                      //Desmarca o checkbox criado por meio do formulário.
    if (this.checked) {
        elementoCriado4 = true;
        elementoCriado1 = false;
        selecionarCard.checked = false;
        borda.className = "selecionado"
        div.className = "back1";
    
        if(uni == false && primeiroValor == 50){
            primeiroValor  = primeiroValor - (primeiroValor * 0.1);
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni = true;
        }
        if(selecionado1 == true && uni1 == false && primeiroValor == 100){
            primeiroValor  = primeiroValor - (primeiroValor * 0.15);
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni1 = true;
        }
        if(selecionado2 == true && uni2 == false && primeiroValor == 250){
            primeiroValor  = primeiroValor - (primeiroValor * 0.2);
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni2 = true;
        }

    } else {
    elementoCriado4 = false;
    borda.className = "pagamentoAvista"

    if(primeiroValor == 45){
        primeiroValor = 50;
        valorFinal.innerHTML = "R$" + primeiroValor + ",00"
        uni = false;
    }
    else if (primeiroValor == 85){
        primeiroValor = 100;
        valorFinal.innerHTML ="R$" + primeiroValor + ",00"
        uni1 = false;
    }
    else if (primeiroValor == 200){
        primeiroValor = 250;
        valorFinal.innerHTML ="R$" + primeiroValor + ",00"
        uni2 = false;
    }
    }
    });
    

    selecionarCard.addEventListener('change', function () {         //Verifica se o checkbox do cartão está marcado. Se estiver marcado
        if (this.checked) {                                         //Assiona à variável elementoCriado1, assim viabilizando o botão de compra.
        div.className = "back";                                     //sem o desconto.
        borda.className = "pagamentoAvista"
        elementoCriado4 = false;
        
        for(var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== this) {
            checkboxes[i].checked = false;
            }
        }
        if(primeiroValor == 45){
            primeiroValor = 50;
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni = false;
        }
        if(primeiroValor == 85){
            primeiroValor = 100;
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni1 = false;
        }
        if(primeiroValor == 200){
            primeiroValor = 250;
            valorFinal.innerHTML = "R$" + primeiroValor + ",00"
            uni2 = false;
        }
    elementoCriado1 = true; 
    linkarCheckbox.checked = false;
    } else {
        div.className = "back1";
        elementoCriado1 = false; 
    }
    });
    
    imagem.src = "354930-icone-de-cartao-de-credito-do-grátis-vetor-removebg-preview.png";
    imagem.alt = "imagem de fundo";
    imagem.className = "imgCartao";                                                         //Cria o cartão e o coloca no HTML.
    nomeCard.innerHTML = nomeCartao;
    nomeCard1.innerHTML = dataCataoDia + " / " + dataCatao;

    evilDiv.appendChild(selecionarCard);
    evilDiv.appendChild(imagem);
    evilDiv.appendChild(nomeCard);
    evilDiv.appendChild(nomeCard1);
    div.appendChild(evilDiv);
}

function pagamento(){
let corPagamento = document.getElementById("corPagamento");
    
if(selecionado == true && elementoCriado1 == true ){
    corPagamento.innerHTML = "concluido";
    corPagamento.className = "verde";                                       //Verifica se as variáveis estão como true e, assim, muda o botão de compra.
    let elementoPai = document.getElementById("comp");                         //Parágrafo concluído sem o desconto do pagamento à vista.
    let elementoFilho = elementoPai.querySelector("p");
    elementoPai.removeChild(elementoFilho);
}
else if(selecionado1 == true && elementoCriado1 == true ){
    corPagamento.innerHTML = "concluido";
    corPagamento.className = "verde";
    let elementoPai = document.getElementById("comp");
    let elementoFilho = elementoPai.querySelector("p");
    elementoPai.removeChild(elementoFilho);
}
else if(selecionado2 == true && elementoCriado1 == true){
    corPagamento.innerHTML = "concluido";
    corPagamento.className = "verde";
    let elementoPai = document.getElementById("comp");
    let elementoFilho = elementoPai.querySelector("p");
    elementoPai.removeChild(elementoFilho);
} 
else if(selecionado == true && elementoCriado4 == true || selecionado1 == true && elementoCriado4 == true){
    let pix = document.querySelector("#comp .ftPixe");
    if (!pix) {                                                                     //Verifica se as condições do pagamento à vista estão corretas.
        corPagamento.innerHTML = "concluido";                                       //caso a opção seja selecionada , cria uma imagem de QR code.
        corPagamento.className = "verde";                                           
        let elementoPai = document.getElementById("comp");
        let elementoFilho = elementoPai.querySelector("p");
        pix = document.createElement("img");
        pix.src = "Imagem do WhatsApp de 2023-06-17 à(s) 16.15.01.jpg"
        pix.className = "ftPixe";
        elementoPai.appendChild(pix);
        elementoPai.removeChild(elementoFilho);
    }
}
else if(selecionado2 == true && elementoCriado4 == true){
    let pix = document.querySelector("#comp .ftPixe");
    if (!pix) {
    corPagamento.innerHTML = "concluido";
    corPagamento.className = "verde";
    let elementoPai = document.getElementById("comp");
    let elementoFilho = elementoPai.querySelector("p");
    pix = document.createElement("img");
    pix.src = "Imagem do WhatsApp de 2023-06-17 à(s) 16.15.01.jpg"
    pix.className = "ftPixe";
    elementoPai.appendChild(pix);
    elementoPai.removeChild(elementoFilho);
    }
}  
else if(!elementoCriado2){
    let divs = document.getElementById("comp");
    let over = document.createElement("p");
    over.innerHTML = "compra invalida";
    divs.appendChild(over);                                     //Caso as condições não forem atendidas
    elementoCriado2 = true;
    }
}
