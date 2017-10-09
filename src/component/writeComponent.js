var fs = require('fs');

function writeComponent(filePath, fileName) {

    let decapitalizedFileName = fileName.charAt(0).toLowerCase() + fileName.slice(1);    

    let data = "";
    data += "import * as React from 'react';\n";
    data += "import * as styles from './" + fileName + ".css';\n";
    data += "\n";
    data += "export interface I" + fileName + "Props {\n";
    data += "}\n";
    data += "\n";
    data += "export interface I" + fileName + "State {\n";
    data += "}\n";
    data += "\n";
    data += "export class " + fileName + " extends React.Component<I" + fileName + "Props, I" + fileName + "State> {\n";
    data += "\n";
    data += "    constructor(props: I" + fileName + "Props) {\n";
    data += "        super(props);\n";
    data += "    }\n";
    data += "\n";
    data += "    render() {\n";
    data += "        return (\n";
    data += "            <div className={styles." + decapitalizedFileName + "}>\n";
    data += "            </div>\n";
    data += "        )\n";
    data += "    }\n";
    data += "\n";
    data += "    /*\n";
    data += "    // componentWillMount() is invoked immediately before mounting occurs.\n";
    data += "    // It is called before render(), therefore setting state synchronously in this method will not trigger a re-rendering.\n";
    data += "    // Avoid introducing any side-effects or subscriptions in this method.\n";
    data += "    componentWillMount() {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "    /*\n";
    data += "    // componentDidMount() is invoked immediately after a component is mounted.\n";
    data += "    // Initialization that requires DOM nodes should go here.\n";
    data += "    // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.\n";
    data += "    // Setting state in this method will trigger a re-rendering.\n";
    data += "    componentDidMount() {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "    /*\n";
    data += "    // componentWillReceiveProps() is invoked before a mounted component receives new props.\n";
    data += "    // If you need to update the state in response to prop changes (for example, to reset it),\n";
    data += "    // you may compare this.props and nextProps and perform state transitions using this.setState() in this method.\n";
    data += "    componentWillReceiveProps(nextProps: I" + fileName + "Props) {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "    /*\n";
    data += "    // Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props.\n";
    data += "    // The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.\n";
    data += "    // shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true.\n";
    data += "    // This method is not called for the initial render or when forceUpdate() is used.\n";
    data += "    shouldComponentUpdate(nextProps: I" + fileName + "Props, nextState: I" + fileName + "State) {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "    /*\n";
    data += "    // componentWillUpdate() is invoked immediately before rendering when new props or state are being received.\n";
    data += "    // Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.\n";
    data += "    // Note that you cannot call this.setState() here. If you need to update state in response to a prop change, use componentWillReceiveProps() instead.\n";
    data += "    componentWillUpdate(nextProps: I" + fileName + "Props, nextState: I" + fileName + "State) {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "    /*\n";
    data += "    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.\n";
    data += "    // Use this as an opportunity to operate on the DOM when the component has been updated.\n";
    data += "    // This is also a good place to do network requests as long as you compare the current props to previous props\n";
    data += "    // (e.g. a network request may not be necessary if the props have not changed).\n";
    data += "    componentDidUpdate(nextProps: I" + fileName + "Props, nextState: I" + fileName + "State) {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "    /*\n";
    data += "    // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.\n";
    data += "    // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,\n";
    data += "    // or cleaning up any DOM elements that were created in componentDidMount\n";
    data += "    componentWillUnmount() {\n";
    data += "    }\n";
    data += "    */\n";
    data += "\n";
    data += "}\n";
    data += "\n";
    data += "export default " + fileName + ";\n";

    fs.writeFile(filePath + '.tsx', data, 'utf8', function (err) {
        if (err) return console.log(err);
    });
}

module.exports = {
    writeComponent
};