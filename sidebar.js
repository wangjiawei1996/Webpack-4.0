function Sidebar() {
  var dom = document.getElementById("root");
  var sidebar = document.createElement("div")
  sidebar.innerText = "content"
  dom.append(sidebar)
}
export default Sidebar;