var icms = 0.18;
var ipi = 0.04
var pis = 0.0186
var cofins = 0.0854
var value = 4.5

function calcular(){
    $("#Client").html(document.getElementById("inputClient").value)
    amountText = document.getElementById("inputAmount").value;
    resultIcms = amountText * icms;
    $("#ICMS").html("R$ "+resultIcms.toFixed(2));
    resultIpi = amountText * ipi;
    $("#IPI").html("R$ "+resultIpi.toFixed(2));
    resultPis = amountText * pis;
    $("#PIS").html("R$ "+resultPis.toFixed(2));
    resultCofins = amountText * cofins;
    $("#COFINS").html("R$ "+resultCofins.toFixed(2));
    result = (amountText * value)+(amountText * icms)+(amountText * ipi)+(amountText * pis)+(amountText * cofins);
    if(amountText > 1000){
        result = result - (result * 0.0156)
    }
    $("#Total").html("R$ "+result.toFixed(2));
}

function gerarRelatorio(){
    amountText = document.getElementById("inputAmount").value;
    resultIcms = amountText * icms;
    resultIpi = amountText * ipi;
    resultPis = amountText * pis;
    resultCofins = amountText * cofins;
    result = (amountText * value)+(amountText * icms)+(amountText * ipi)+(amountText * pis)+(amountText * cofins);
    if(amountText > 1000){
        result = result - (result * 0.0156)
    }

    cliente = document.getElementById("inputClient").value;
    var doc = new jsPDF();
    doc.text('Cliente:', 10, 10);
    doc.text(cliente, 40, 10);
    doc.text('ICMS:', 10, 20);
    doc.text("R$ "+resultIcms.toFixed(2).toString(), 40, 20);
    doc.text('IPI:', 10, 30);
    doc.text("R$ "+resultIpi.toFixed(2).toString(), 40, 30);
    doc.text('PIS:', 10, 40);
    doc.text("R$ "+resultPis.toFixed(2).toString(), 40, 40);
    doc.text('COFINS:', 10, 50);
    doc.text("R$ "+resultCofins.toFixed(2).toString(), 40, 50);
    totalImpostos = resultIcms+resultIpi+resultPis+resultCofins;
    doc.text('Impostos:', 10, 60);
    doc.text("R$ "+totalImpostos.toFixed(2).toString(), 40, 60);
    doc.text('TOTAL:', 10, 70);
    doc.text("R$ "+result.toFixed(2).toString(), 40, 70);
    doc.save('NotaFiscal.pdf');
}


