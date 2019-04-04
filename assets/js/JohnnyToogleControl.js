const { Component } = wp.element;
const { ToggleControl } = wp.components;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;


class JohnnyToogleControl extends Component {
    constructor() {
        super(...arguments);
        this.updateToogleState = this.updateToogleState.bind(this);
        this.state = {
          johnny_tooglecontrol: this.props._johnny_tooglecontrol,
        };
    }

    updateToogleState(value) {
        const { johnny_tooglecontrol } = this.state;

        this.setState( { johnny_tooglecontrol: value } );
        //jQuery('input[type="checkbox"][name="_johnny_tooglecontrol"]').trigger('click');
        this.props.setMetaFieldValue(value);
    }

    render() {
        const { johnny_tooglecontrol } = this.state;

        return (
            <div
                className="johnny-exclude-sidebar-content-wrap"
            >
                <ToggleControl
                    className="johnny-exclude-sidebar-content-tooglecontrol"
                    label="ToogleControl"
                    help={ johnny_tooglecontrol ? 'ToogleControl is Enabled.' : 'ToogleControl is Disabled.' } 
                    checked={ johnny_tooglecontrol }
                    onChange= { this.updateToogleState }
                />
            </div>
        );
    }
}

export default compose(
    withSelect((select, props) => ({
        
            _johnny_tooglecontrol: select( 'core/editor' )
                .getEditedPostAttribute( 'meta' )._johnny_tooglecontrol

    })),
    withDispatch((dispatch, props) => ({
        
            setMetaFieldValue( value ) {
                dispatch( 'core/editor' ).editPost(
                    { meta: { _johnny_tooglecontrol: value } }
                );
            }

    }))
)(JohnnyToogleControl);