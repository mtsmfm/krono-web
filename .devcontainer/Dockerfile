FROM ruby:2.7.1-buster

COPY --from=node:14.1.0-buster /usr/local /usr/local
COPY --from=node:14.1.0-buster /opt /opt

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update \
  && apt-get install -y zsh less

RUN useradd --create-home --user-group --uid 1000 app
RUN mkdir -p /app /original $BUNDLE_PATH
RUN chown -R app /app /original $BUNDLE_PATH

WORKDIR /app

USER app

ENV SHELL=/bin/zsh BUNDLE_PATH=/app/vendor/bundle BUNDLE_JOB=4 HOME=/home/app
