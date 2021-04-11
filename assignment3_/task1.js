var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h3>" + "Qualifications" + "</h3>");
var j = 1
for (var i = 0 ; i < qual.length ; i++) {
    document.write(j + ")" + qual[i] + "<br>");
    j++
}