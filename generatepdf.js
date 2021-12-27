let allData = [];
var doc;

function pdfGenerate() {

  doc = new jsPDF();
  // page 1
  var x = 20;
  var y = 20;

  doc.setDrawColor(0);
  doc.setFillColor(234, 236, 249);
  doc.rect(-1, -1, 220, 35, 'FD'); //Fill and Border
  doc.setFontSize(14);
  doc.setFontType('normal');
  doc.text('', 42, 600);

  x += 130;
  doc.setFontType('normal');
  doc.text(x, y, "Thursday, July 22, 2021");
  x += -130;

  y += 10
  doc.setFontSize(14);
  doc.setFontType('bold');
  doc.text(x, y, "Your Details");


  // x += 5
  y += 10
  doc.text(x, y, "Full Legal Name");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "Filopimin Dimopoulos");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Number of Property Owners");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "2");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Phone Number (mobile)");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "0439817393");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Email");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "phillip.dimopoulos@westnet.com.au");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Signer 2 Name");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "Susan Kate Dimopoulos");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Signer 2 Email");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "shushu70@westnet.com.au");

  y += 8
  doc.setFontSize(15);
  doc.setFontType('bold');
  doc.text(x, y, "Installation Address");

  y += 8
  doc.setFontSize(12);
  doc.setFontType('bold');
  doc.text(x, y, "Signer 2 Email");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "11 LITCHFIELD CRESCENT");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "City/Suburb");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "CARRAMAR");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "State");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "WA");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Postcode");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "6031");

  y += 8
  doc.setFontSize(15);
  doc.setFontType('bold');
  doc.text(x, y, "Property Ownership");

  y += 8
  doc.setFontSize(12);
  doc.setFontType('bold');
  doc.text(x, y, "Property Ownership");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "I/We are the property owners");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Property Ownership YN");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "Yes");


  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Is the property mortgaged?");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "Yes");


  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Lender");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "Westpac");


  doc.addPage();
  var x = 20;
  var y = 20;

  y += 8
  doc.setFontSize(15);
  doc.setFontType('bold');
  doc.text(x, y, "Plico Solution");

  y += 8
  doc.setFontSize(12);
  doc.setFontType('bold');
  doc.text(x, y, "Description");

  x += 130;
  doc.setFontType('bold');
  doc.text(x, y, "Amount");
  x += -130;

  y += 8;
  doc.setFontType('bold');
  doc.text(x, y, "Energy Maker");

  y += 6;
  doc.setFontType('normal');
  doc.text(x, y, "Number of Systems:");

  y += 6;
  doc.text(x, y, "1");

  x += 130;
  doc.setFontType('normal');
  doc.text(x, y, "0.00 AUD");

  y += 7
  doc.setFontType('normal');
  doc.text(x, y, "Subtotal: 0.00 AUD");

  y += 7
  doc.setFontType('bold');
  doc.text(x, y, "0.00 AUD");

  x += -130

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Date of Birth");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "Monday, March 30, 1964");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Drivers Licence Number");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "3893860");

  y += 8
  doc.setFontType('bold');
  doc.text(x, y, "Drivers Licence State");

  y += 6
  doc.setFontType('normal');
  doc.text(x, y, "WA");

  // y2 is for materials needed and days needed
  var disclaimer_1 = "By submitting this form I (on my own behalf and on behalf of any other person named as an applicant) (together, 'I', 'me' or 'my') give Starling Energy (Creators of Plico Energy) ('Starling Energy') consent to:";
  var lines;
  x = 20
  y += 10;

  doc.setFontSize(12);
  doc.setFontType("normal");
  lines = doc.splitTextToSize(disclaimer_1, 174);
  doc.text(x, y, lines);

  y += 8
  // y2 is for materials needed and days needed
  var disclaimer_2 = "Proceed with Synergy and Western Power applications on my behalf, in relation to the installation of the Plico system; and";
  var lines2;

  x = 20
  y += 10;

  doc.setFontSize(12);
  doc.setFontType("normal");
  lines2 = doc.splitTextToSize(disclaimer_2, 174);
  doc.text(x, y, lines2);

  // y2 is for materials needed and days needed
  var disclaimer_3 = "Starling Energy or its agent undertaking a credit check on me with the Credit Reporting Body (CRB) Experian Asia Pacific Pty Ltd and/or other equivalent CRB (in accordance with Starling Energy’s credit reporting policy, which is available below).";
  var lines3;

  x = 20
  y += 13;
  doc.setFontSize(12);
  doc.setFontType("normal");
  lines3 = doc.splitTextToSize(disclaimer_3, 174);
  doc.text(x, y, lines3);

  y += 20
  //doc.text(x, y, "Link: Starling Energy’s credit reporting policy");
  doc.text(x, y, "Link:");
  x += 10
  doc.setTextColor(0, 0, 255);
  //doc.text(x, y, "Starling Energy's privacy polic");
  doc.textWithLink("Starling Energy’s credit reporting policy", 30, 173, {
    url: 'https://www.example.com/'
  });

  x -= 10
  y += 8
  doc.setTextColor(0, 0, 0);
  doc.text(x, y, "By submitting this form I acknowledge and agree to the following:");


  // y2 is for materials needed and days needed
  var disclaimer_4 = "The current form does not replace the need for a contract for the provision of the services contemplated, and as such this form does not give rise to a binding agreement between me and Starling Energy in relation to the provision of services to me. A services contract will be distributed electronically to the property owners and will require my signature (if both Starling 2 Energy and I wish to proceed) before any equipment is installed.";
  var lines4;

  x = 20
  y += 12;

  doc.setFontSize(12);
  lines4 = doc.splitTextToSize(disclaimer_4, 174);
  doc.text(x, y, lines4);

  y += 10
  // y2 is for materials needed and days needed
  var disclaimer_5 = "If Western Power determines that my premises requires a meter upgrade to enable Starling Energy's equipment to participate in a virtual power plant (i.e. measure and record electricity flows in each direction), Starling Energy will assist me to arrange for Western Power (or its contractor) to install a new meter at my cost, before Starling Energy installs its equipment. ";
  var lines5;

  x = 20
  y += 18;
  doc.setFontSize(12);
  doc.setFontType("normal");
  lines5 = doc.splitTextToSize(disclaimer_5, 174);
  doc.text(x, y, lines5);


  doc.addPage();
  var x = 20;
  var y = 20;

  // y2 is for materials needed and days needed
  var disclaimer_6 = "I agree to pay to Starling Energy a $250 deposit, which Starling Energy will hold pending a binding services agreement being in place between Starling Energy and me. This deposit is fully refundable and will be credited back to my nominated bank account within 7 days of me informing Starling Energy in writing that I do not wish to proceed to a binding contract for services (which I can do at any time prior to signing a binding agreement). If I do proceed and a services agreement is formed between Starling Energy and me, and then the installation proceeds, the $250 deposit will be credited to the amount of the mobilisation fee / DCEP membership fee which you must pay Starling Energy under the services agreement.";
  var lines6;

  x = 20
  y += 8;
  doc.setFontSize(12);
  lines6 = doc.splitTextToSize(disclaimer_6, 174);
  doc.text(x, y, lines6);

  y += 20
  // y2 is for materials needed and days needed
  var disclaimer_6 = "Starling Energy collects, uses, discloses and stores my personal information (including information submitted in this form) in accordance with Starling Energy's privacy policy (link below). ";
  var lines6;

  x = 20
  y += 20.5;
  doc.setFontSize(12);
  doc.setFontType("normal");
  lines6 = doc.splitTextToSize(disclaimer_6, 174);
  doc.text(x, y, lines6);

  y += 16
  doc.text(x, y, "Link:");
  x += 10
  doc.setTextColor(0, 0, 255);
  //doc.text(x, y, "Starling Energy's privacy polic");
  doc.textWithLink("Starling Energy's privacy policy", 30, 84.5, {
    url: 'https://www.example.com/'
  });

  // y2 is for materials needed and days needed
  var disclaimer_7 = "Where there are two or more people named as applicant on this form, the applicant submitting this form confirms that they are authorised to give the consents and make the acknowledgements on behalf of each other named applicant. ";
  var lines7;

  x = 20
  y += 10;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  lines7 = doc.splitTextToSize(disclaimer_7, 174);
  doc.text(x, y, lines7);

  y += 18
  doc.setFontType('bold');
  doc.text(x, y, "Deal ID");

  y += 8
  doc.setFontType('normal');
  doc.text(x, y, "5689859118");

  doc.save("Results.pdf");

}