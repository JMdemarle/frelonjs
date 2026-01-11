//import { StyleSheet } from 'react-native'
import { red, amber } from '@mui/material/colors';


const styles = {
    KeyBcontainer: {
      flex: 1
    },    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexContainer1Col:{
      flex:0,
      flexDirection:'column',
      alignItems: 'flex-start',
      }, 
      flexContainer1RowCenter:{
        flex:0,
        flexDirection:'row',
        justifyContent: 'space-around',
        }, 
        titreCard: {
        alignItems: 'center',
        flexDirection:'column',
        alignSelf:'stretch',
            justifyContent: 'space-between',    
        height:30,
    },
    flex1Column:  {
      flex:1,
      flexDirection: 'column',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

    TextTitreCard: {
        textAlign:'center',
        fontSize:20,
        borderColor: red[500],
        bgcolor:amber[50],         
        border : 1,
        color : 'black',
        borderRadius: 2,    
    },    

    signupContainer: {
      width: '100%',
      alignItems: 'center',
      padding: 10,
      elevation: 10,
      backgroundColor: 'lemonchiffon'
    },
    titreliste: {
      flexDirection: 'row', 
      flex:0, 
      backgroundColor:'goldenrod'
    },
    traitNoir: {
      backgroundColor: 'black',
      height: 1, 
      flex: 1, 
      alignSelf: 'center',    
    },    
    traitVert: {
      backgroundColor: 'green',
      height: 1, 
      flex: 1, 
      alignSelf: 'center',    
    },    
    traitBleu: {
      backgroundColor: 'blue',
      height: 1, 
      flex: 1, 
      alignSelf: 'center',    
    },    
    ligne1:{
      justifyContent: 'space-between',
      height: 25,
      flex:1,
      flexDirection:'row',
      },
      separateur: {
      height: 4,
      backgroundColor: 'black',
      borderBottomWidth: 1,
      },
      memo: {
      flexDirection: 'row',
      },
  
    rowFront: {
    alignItems: 'center',
    backgroundColor: 'cornsilk',
    borderBottomWidth: 0.5,

    justifyContent: 'space-between',
    height: 50,
    flex:1,
    flexDirection:'row',
    },
// pour une mise en forme complexe
    rowFrontFree: {
      alignItems: 'center',
      backgroundColor: 'cornsilk',
      borderBottomWidth: 0.75,
      justifyContent: 'center',
  //    height: 100,
      },
      rowFrontFree2: {
        alignItems: 'center',
        backgroundColor: 'ivory',
        borderBottomWidth: 0.75,
        justifyContent: 'center',
    //    height: 100,
        },
        rowFrontLeft: {
          alignItems: 'stretch',
          backgroundColor: 'cornsilk',
          borderBottomWidth: 0.75,
          justifyContent: 'flex-start',
      //    height: 100,
          },
        
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'gold',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        fontWeight: 'bold',
        color: 'green',
        right: 0,
    },
    backRightBtnRight: {
        fontWeight: 'bold',
        color: 'red',
        right: 0,
    },       
    zoneAnnulerConfirmer:{
      alignItems: 'center',  
      height:40 ,
      flexDirection:'row',
      alignSelf:'stretch' ,
      backgroundColor:'goldenrod', 
      justifyContent: 'space-between',
     },
    TextAnnuler: {
      fontWeight: 'bold',
      color: 'green',
      fontSize:18,
      right: 0,
   },
      TextSupprimer: {
      fontWeight: 'bold',
      color: 'red',
      fontSize:18,
      right: 0,
   },
      TextConfirmer: {
      color: 'orangered',
      fontSize:20,
      right: 0,
   },
   btnListNew: {
    alignItems: 'center',
    height:40,
    flexDirection:'row',
    alignSelf:'stretch',
    justifyContent: 'space-between',
    flex:3,
},
errorText: {
  color: 'red',
},
 
  }

const headerStyles = {
    title : {
        color: 'black', 
        fontWeight: 'bold', 
        alignSelf: 'center',
        fontSize: 15,
    },
    
}

  export { styles, headerStyles }