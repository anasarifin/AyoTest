const React = require('react-native');

const {StyleSheet} = React;

export default {
  containerView: {
    flex: 1,
    backgroundColor: '#CBDBEC',
  },

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  bottomView: {
    width: '100%',
    height: 40,
    backgroundColor: '#0FB63F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderTopColor: '#0FB63F',
    // borderTopWidth: 1,
  },
  textStyle: {
    textAlign: 'center',
    padding: 11,
    color: '#fff',
  },
  bgGreen: {
    backgroundColor: '#0FB63F',
  },
  bgPurle: {
    backgroundColor: '#985bff',
  },
  bgBlack: {
    backgroundColor: '#060709',
  },
  textGreen: {
    color: '#0FB63F',
  },
  textPurle: {
    color: '#985bff',
  },
  textBlack: {
    color: '#060709',
  },
  submit: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  wrapp: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  boxWrapp: {
    margin: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  box: {
    marginBottom: 20,
    padding: 20,
    height: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  boxSm: {
    padding: 10,
    borderRadius: 5,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'gray',
    width: '100%',
    paddingHorizontal:20
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  profileImage:{
    width:100,
    height: 100,
    borderRadius: 100,
    alignSelf:'center'
  },
};
