var MainContents=React.createClass({displayName:"MainContents",render:function(){return React.createElement("div",null,React.createElement(Button,null))}}),Button=React.createClass({displayName:"Button",getInitialState:function(){return{ruby:1,selectProgramId:null,pushed:!1}},setProgramId:function(e){var t=e.target.value;this.setState({selectProgramId:t,pushed:!0})},canselHandling:function(){this.setState({selectProgramId:null,pushed:!1})},render:function(){var e,t;return this.state.pushed?(e=React.createElement("button",{className:this.state.pushed?"pure-menu-item":"pushed-display-none",onClick:this.canselHandling},"キャンセル"),t=React.createElement(TypingWindow,{programId:this.state.selectProgramId})):(e=React.createElement("button",{className:this.state.pushed?"pushed-display-none":"pure-menu-item",onClick:this.setProgramId,value:this.state.ruby},"Ruby"),t=""),React.createElement("div",null,React.createElement("div",{id:"buttons"},React.createElement("div",{className:"pure-menu pure-menu-horizontal"},React.createElement("p",{className:"pure-menu-heading"},"Reserved word typing"),React.createElement("ul",{className:"pure-menu-list"},e))),this.state.pushed?React.createElement(TypingWindow,{programId:this.state.selectProgramId}):"")}}),TypingWindow=React.createClass({displayName:"TypingWindow",getInitialState:function(){return{dataStated:!1,quesions:[]}},componentWillMount:function(){$.ajax({url:"/quesions/"+this.props.programId,dataType:"json",cache:!1,success:function(e){this.setState({quesions:e,dataStated:!0}),console.log(this.state.quesions)}.bind(this),error:function(e,t,a){console.log("error")}.bind(this)})},render:function(){var e;return e=this.state.dataStated?this.state.quesions.map(function(e,t){return React.createElement("div",{key:t,className:"hoge"},React.createElement("p",null,e.word),React.createElement("p",null,e.description))}):React.createElement("p",null,"データを準備中です..."),React.createElement("div",null,React.createElement("div",{id:"game-place",className:"pure-u-1 square"},e))}});ReactDOM.render(React.createElement(MainContents,null),document.getElementById("contents"));