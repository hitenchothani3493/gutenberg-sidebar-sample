const { Component } = wp.element;
const { TextControl } = wp.components;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;


class JohnnyTextControl extends Component {
    constructor() {
        super(...arguments);
        this.updateTextState = this.updateTextState.bind(this);
        this.state = {
          johnny_textcontrol: this.props._johnny_textcontrol,
        };
    }

    updateTextState(value) {
        const { johnny_textcontrol } = this.state;

        this.setState( { johnny_textcontrol: value } );
        //jQuery('input[type="checkbox"][name="_johnny_tooglecontrol"]').trigger('click');
        this.props.setMetaFieldValue(value);
    }

    render() {
        const { johnny_textcontrol } = this.state;

        return (
            <div
                className="johnny-exclude-sidebar-content-wrap"
            >
                <TextControl
                    className="johnny-exclude-sidebar-content-textcontrol"
                    label="TextControl"
                    help={ "The value is: " + johnny_textcontrol }
                    value={ johnny_textcontrol }
                    onChange={ this.updateTextState }
                />
            </div>
        );
    }
}

export default compose(
    withSelect((select, props) => ({
        
            _johnny_textcontrol: select( 'core/editor' )
                .getEditedPostAttribute( 'meta' )._johnny_textcontrol

    })),
    withDispatch((dispatch, props) => ({
        
            setMetaFieldValue( value ) {
                dispatch( 'core/editor' ).editPost(
                    { meta: { _johnny_textcontrol: value } }
                );
            }

    }))
)(JohnnyTextControl);