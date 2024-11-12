$(()=>{ // ready

  function red() {
    $('body')
      .css('background','#B60C0C');
    console.log('RED');
  }

  function orange() {
    $('body')
      .css('background','#EBAE10');
    console.log('ORANGE');
  }

  function green() {
    $('body')
      .css('background','#83ba2b');
    console.log('GREEN');
  }

  var widths = [0, 576, 992];

  function resizeFn() {
    if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
      red();
    }
    else if (window.innerWidth >= widths[1] && window.innerWidth < widths[2]) {
      orange();
    }
    else {
      green();
    }
  }

  //resizeFn();

  // Atualizar automaticamente o ano (footer - copyright)  
  let ano = document.getElementById("copyrightYear")
  let anoAtual = new Date().getFullYear()
  ano.textContent = anoAtual
  
  // ler arquivo usando jQuery
  let arquivo = "catalogo.csv";
/*
    $.ajax({
        type: "GET",
        url: arquivo,
        dataType: "text",
        success: (dados)=>{

            // separa as linhas
            let linhas = dados.split("\n")

            // para cada linha
            for(let linha of linhas){
                console.log(linha);
            }
         },
         statusCode: {
            404: function() {
                console.log( "page not found" );
            },
            500: function() {
                console.log( "page fail" );
            }
          },
          error:(jqXHR, textStatus, errorThrown)=>{
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log("Fim");
          }
    });

    $.ajax({
        type: "GET",
        url: "catalogo.csv",
        dataType: "text",
        success: function(data) { 
            const parsedCSV = parseCSV(data) 
            $( function() {
                var availableTags = parsedCSV;
                $( "#tags" ).autocomplete({
                 source: availableTags
               });
             } );
      },
      error:(jqXHR, textStatus, errorThrown)=>{
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        console.log("Fim");
      }
     })

    function lerArquivoCSV(arquivo, callback) {
        const leitor = new FileReader();
      
        leitor.onload = function (evento) {
          const conteudo = evento.target.result;
          callback(conteudo);
        };
      
        leitor.readAsText(arquivo);
      }
      
    const inputArquivo = document.getElementById('arquivoCSV');
      
    inputArquivo.addEventListener('change', function (evento) {
        const arquivo = evento.target.files[0];
        
        lerArquivoCSV(arquivo, function (conteudo) {
            // Aqui você pode prosseguir para o próximo passo
            console.log(conteudo);
        });
    });
*/
});

function parseCSV(csv) {
    /* split the data into array of lines of type */
    const csvLines = csv.split(/\r\n|\n/);
    /* loop throw all the lines a remove first part (from the start, to comma) */
    return csvLines.map(line => line.split(',')[1])
}