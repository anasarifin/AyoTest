const React = require('react-native');

const {StyleSheet} = React;

export default {
  container: {
    height: '100%',
    padding: 20,
  },
  textCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoCon: {
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: '30%',
  },
  logoConRegis: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
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
  logo: {
    width: 170,
    height: 170,
    marginRight: -12,
  },
  inputText: {
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,.5)',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  loginButton: {
    borderRadius: 5,
    backgroundColor: '#060709',
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 45,
    height: 45,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  },
  warning: {
    marginTop: -40,
    fontSize: 14,
    color: 'red',
  },
  registerButton: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  loading: {
    position: 'absolute',
    bottom: 50,
    opacity: 0,
  },
  loadingOn: {
    position: 'absolute',
    bottom: 50,
    opacity: 1,
  },
  iconP: {
    borderWidth: 5,
    alignItems: 'center',
    borderColor: '#333333',
    width: 200,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
