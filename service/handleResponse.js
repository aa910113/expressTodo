const handleResponse = (code, res, data, err) => {
  if (code <= 200) {
    res.send({
      status: 'success',
      data,
    });
    res.end();
  } else {
    res.status(code).send({
      status: 'error',
      err,
    });
    res.end();
  }
};
module.exports = handleResponse;
