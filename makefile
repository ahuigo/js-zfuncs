msg?=
gitcheck:
	if [[ "$(msg)" = "" ]] ; then echo "Usage: make pkg msg='commit msg'";exit 20; fi
dev:
	npm i
test:
	npm test
build: test
	npm run build
pkg: gitcheck build
	npm version patch --force
	npm publish
	git commit -am "$(msg)"
	git push origin HEAD
new:
	cp jestconfig.json package.json tsconfig.json makefile jestconfig.json .gitignore ../proj
