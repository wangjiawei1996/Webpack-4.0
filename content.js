function Content() {
  var dom = document.getElementById("root");
  var content = document.createElement("div")
  content.innerText = "sidebar"
  dom.append(content)
}

export default Content;