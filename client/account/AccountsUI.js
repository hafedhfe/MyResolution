import React ,{Component} from 'react';
import ReactDom from 'react-dom';

export default class accountsUI extends Component {

componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
        ReactDom.findDOMNode(this.refs.container));
}
componentWillUnmount() {

    Blaze.remove(this.view);
}

    render() {

        return <span ref ="container" />
    }
}
