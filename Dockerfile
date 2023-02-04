FROM ubuntu:bionic

WORKDIR /app

# Stage 0: install runtime
RUN apt-get update && apt-get install curl unzip -y
RUN curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "/usr/bin" --skip-shell
RUN fnm install 16

# Stage 1: install & compile dependencies (only runs when dependencies changed)
COPY *.json ./
RUN eval "$(fnm env)" && npm install

# Stage 2: copy everything else (only runs when code changed)
COPY . .

ENTRYPOINT ["bash", "-c", "eval $(fnm env) && ./test-until-failure"]
