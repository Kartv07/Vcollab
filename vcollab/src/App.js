import './App.css';
import {Menu} from 'antd';
import {Route, Routes, useNavigate} from 'react-router-dom';

function App() {

  const Navigate = useNavigate();

  return (
    <div className="App" style={{display:"flex", flexDirection:"row"}}>
      <Menu
      onClick = {({key}) => {
        if(key !== "/"){
           Navigate(key);
        }
      }}

      items={[{label:"Menu", key:"/"},
                    {label:"File", key:"/file",
                      children:[{label:"Create", key:"/file/create"},
                                {label:"Open", key:"/file/open"},
                                {label:"Share", key:"/file/share"},
                                {label:"Download", key:"/file/download"},
                                {label:"Print", key:"/file/print"}
                              ]
                    },
                    {label:"Edit", key:"/edit",
                    children:[{label:"Undo", key:"/edit/undo"},
                              {label:"Redo", key:"/edit/redo"},
                              {label:"Cut", key:"/edit/cut"},
                              {label:"Paste", key:"/edit/paste"},
                              {label:"SelectAll", key:"/edit/selectall"}
                              ]
                    },
                    {label:"Insert", key:"/insert",
                    children:[{label:"Image", key:"/insert/image"},
                              {label:"Video", key:"/insert/video"},
                              {label:"Link", key:"/insert/link"},
                              {label:"Table", key:"/insert/table"},
                              {label:"Drawing", key:"/insert/drawing"},
                              {label:"Chart", key:"/insert/chart"},
                              {label:"Code", key:"/insert/code"}
                            ]
                    },
                    {label:"Format", key:"/format",
                    children:[{label:"Text", key:"/format/text"},
                      {label:"Paragraph", key:"/format/paragraph"},
                      {label:"Table", key:"/format/table"},
                      {label:"Alignment", key:"/format/alignment"},
                      {label:"Borders", key:"/format/borders"},
                      {label:"Lists", key:"/format/lists"}
                    ]
                  }]}>
      </Menu>
      <Content />
    </div>
  );
}

function Content(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div style={{alignItems:"center", margin:"150px", marginLeft:"500px", padding:"50px"}}>All you want is happiness.</div>  }></Route>
        <Route path="/file/create" element={<div><ContentPane menu_name = "File" Control_name = "Create" route_name="/file/create" /></div>}></Route>
        <Route path="/file/open" element={<div><ContentPane menu_name = "File" Control_name = "Open" route_name="/file/open" /></div>}></Route>
        <Route path="/file/share" element={<div><ContentPane menu_name = "File" Control_name = "Share" route_name="/file/share" /></div>}></Route>
        <Route path="/file/download" element={<div><ContentPane menu_name = "File" Control_name = "Download" route_name="/file/download" /></div>}></Route>
        <Route path="/file/print" element={<div><ContentPane menu_name = "File" Control_name = "Print" route_name="/file/print" /></div>}></Route>

        <Route path="/edit/undo" element={<div><ContentPane menu_name = "Edit" Control_name = "Undo" route_name="/edit/undo" /></div>}></Route>
        <Route path="/edit/redo" element={<div><ContentPane menu_name = "Edit" Control_name = "Redo" route_name="/edit/redo" /></div>}></Route>
        <Route path="/edit/cut" element={<div><ContentPane menu_name = "Edit" Control_name = "Cut" route_name="/edit/cut" /></div>}></Route>
        <Route path="/edit/paste" element={<div><ContentPane menu_name = "Edit" Control_name = "Paste" route_name="/edit/paste" /></div>}></Route>
        <Route path="/edit/selectall" element={<div><ContentPane menu_name = "Edit" Control_name = "SelectAll" route_name="/edit/selectall" /></div>}></Route>

        <Route path="/insert/image" element={<div><ContentPane menu_name = "Insert" Control_name = "Image" route_name="/insert/image" /></div>}></Route>
        <Route path="/insert/video" element={<div><ContentPane menu_name = "Insert" Control_name = "Video" route_name="/insert/video" /></div>}></Route>
        <Route path="/insert/link" element={<div><ContentPane menu_name = "Insert" Control_name = "Link" route_name="/insert/link" /></div>}></Route>
        <Route path="/insert/table" element={<div><ContentPane menu_name = "Insert" Control_name = "Table" route_name="/insert/table" /></div>}></Route>
        <Route path="/insert/drawing" element={<div><ContentPane menu_name = "Insert" Control_name = "Drawing" route_name="/insert/drawing" /></div>}></Route>
        <Route path="/insert/chart" element={<div><ContentPane menu_name = "Insert" Control_name = "Chart" route_name="/insert/chart" /></div>}></Route>
        <Route path="/insert/code" element={<div><ContentPane menu_name = "Insert" Control_name = "Code" route_name="/insert/code" /></div>}></Route>

        <Route path="/format/text" element={<div><ContentPane menu_name = "Format" Control_name = "Text" route_name="/format/text" /></div>}></Route>
        <Route path="/format/paragraph" element={<div><ContentPane menu_name = "Format" Control_name = "Paragraph" route_name="/format/paragraph" /></div>}></Route>
        <Route path="/format/table" element={<div><ContentPane menu_name = "Format" Control_name = "Table" route_name="/format/table" /></div>}></Route>
        <Route path="/format/alignment" element={<div><ContentPane menu_name = "Format" Control_name = "Alignment" route_name="/format/alignment" /></div>}></Route>
        <Route path="/format/borders" element={<div><ContentPane menu_name = "Format" Control_name = "Borders" route_name="/format/borders" /></div>}></Route>
        <Route path="/format/lists" element={<div><ContentPane menu_name = "Format" Control_name = "Lists" route_name="/format/lists" /></div>}></Route>
       
      </Routes>
    </div>
  )
}

function ContentPane (props ){
  return (
    <div style={{display:"flex", flexDirection:"column", margin:"150px", marginLeft:"500px", padding:"50px"}}>
      <h1>Content Pane</h1>
      <h2>Menu: {props.menu_name}</h2>
      <h2>Control: {props.Control_name}</h2>
      <h3>Route: {props.route_name}</h3>
    </div>
  )
}

export default App;
