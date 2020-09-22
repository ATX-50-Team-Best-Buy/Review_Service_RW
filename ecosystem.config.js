module.exports = {
  apps: [
    {
      name: "review_service_rw",
      script: "./server/index.js",
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-14-15-3.us-east-2.compute.amazonaws.com/",
      key: "~/.ssh/FEC-BestBuy-RW.pem",
      ref: "origin/master",
      repo: "https://github.com/ATX-50-Team-Best-Buy/review_service_rw.git",
      path: "/home/ubuntu/review-service",
      "post-deploy":
        "npm install && npm run build && pm2 startOrRestart ecosystem.config.js",
    },
  },
};
