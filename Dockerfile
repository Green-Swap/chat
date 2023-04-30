FROM node:14
COPY package*.json ./
RUN npm install
COPY . .
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
RUN npm install
EXPOSE 3000
CMD ["/wait-for-it.sh", "mongo:27017", "--timeout=30000", "--", "sh", "-c", "sleep 5 && npm start"]
