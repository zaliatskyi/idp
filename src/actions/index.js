export const Login = (name, players) => {
  return {
    type: 'LOGIN',
    name,
    players
  }
}