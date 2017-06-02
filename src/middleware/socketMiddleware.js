export default (socket, channelName = "action") => store => {
  socket.on(channelName, store.dispatch);
  console.log(channelName);

  return next => action => {
    if (action.meta && action.meta.remote) {
      socket.emit(channelName, action);
    }
    console.log(action);
    return next(action);
  }
}
