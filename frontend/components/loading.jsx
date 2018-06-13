import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Loader = () => {
  return (
    <MuiThemeProvider>
      <CircularProgress size={80} thickness={5} />
    </MuiThemeProvider>
  );
}
// FAILED ATTEMPT TO MAKE A WRAPPER COMPONENT TO DRY UP CODE

// let withLoader = (Comp, newPropsFunc) => {
//   return class WithLoader extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         loading: true
//       }
//     }

//     componentDidMount() {
//       this.setState({ loading: false });
//     }

//     componentWillReceiveProps(newProps) {
//       newPropsFunc(newProps);
//     }

//     render() {
//       if (this.state.loading) {

//         return (
//           <MuiThemeProvider>
//             <CircularProgress size={80} thickness={5} />
//           </MuiThemeProvider>
//         )
//       } else {
//         debugger;
//         return <Comp { ...this.state } {...this.props} />
//       }
//     }
//   }
// }
// export default withLoader;

export default Loader;
