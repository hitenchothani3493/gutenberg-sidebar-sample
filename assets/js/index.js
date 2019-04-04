import JohnnyTextControl from "./JohnnyTextControl";
import JohnnyToogleControl from "./JohnnyToogleControl";

( function( wp ) {
    const { Fragment } = wp.element;
    const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
    const { registerPlugin } = wp.plugins;

    const JohnnyToggleControl = () => ( 
        <Fragment>
            <PluginSidebarMoreMenuItem
                target="johnny-sidebar"
            >
                Hello Johnny
            </PluginSidebarMoreMenuItem>
            <PluginSidebar
                name= "johnny-sidebar"
                title= "Hello Johnny"
            >

                <JohnnyTextControl
                />

                <hr/>

                <JohnnyToogleControl
                />
            
            </PluginSidebar>
        </Fragment>
    );

    registerPlugin( 'johnny-sidebar', {
        icon: 'smiley',
        render: JohnnyToggleControl,
    } );
} )( window.wp );