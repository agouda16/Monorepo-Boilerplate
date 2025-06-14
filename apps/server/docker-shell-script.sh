docker build -t node-app .
docker rm -f node-clean-architecture 2>/dev/null || true
docker run --name node-clean-architecture -p 8080:8080 node-app
