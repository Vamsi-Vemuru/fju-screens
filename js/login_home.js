function coaches() {
    var text = 'Assigned coaches for current course are as follows:<br>1. rajesh<br>2. Suresh';
    document.getElementById("display").innerHTML = text;
  }

  function enrolled() {
    var text = "<select> <option value=" + "volvo" + ">WP</option> <option value=" + "saab" + ">Java</option> <option value=" + "opel" + ">Py</option> <option value=" + "audi" + ">HTML</option> </select>";
    document.getElementById("display").innerHTML = text + "<br>video here";
  }
  function status() {
    var text = 'Current Module: Not completed';
    document.getElementById("display").innerHTML = text;
  }
  function events() {
    var text = 'Upcoming events are:<br>1. vmpre<br>2. askwll';
    document.getElementById("display").innerHTML = text;
  }
  function disc() {
    var text = 'Discuss with your coaches and students regarding course:';
    document.getElementById("display").innerHTML = text;
  }
  function faq() {
    var text = 'FAQs:<br>1. Can I jump to next module without completing current module:<br>A: No, you should complete the current module to take next.<br>2. How can I solve my doubts?<br>A: Through discussion forum you can get your doubts answered.<br>3. How can I know my status inthe course<br>A: Click on status on right navigation bar to know your status.';
    document.getElementById("display").innerHTML = text;
  }
  function abt() {
    var text = 'Web Programming:<br>The course make you understand what is web, how a web application can be made and all others';
    document.getElementById("display").innerHTML = text;
  }