module.exports = [
  {
    id: "add-headers",
    url: "*",
    method: ["GET", "POST", "PUT", "PATCH"],
    variants: [
      {
        id: "add-x-custom-header",
        type: "middleware",
        options: {
          middleware: (req, res, next) => {
            const customHeaders = Object.keys(req.headers).filter(header => header.startsWith('x-'));
            customHeaders.forEach(header => {
              res.set(header, req.headers[header]);
            });
            next(); 
          },
        },
      },
    ],
  },
];
