msg?=
gitcheck:
	if [[ "$(msg)" = "" ]] ; then echo "Usage: make pkg msg='commit msg'";exit 20; fi
dev:
	cnpm i
test:
	cnpm test
build: test
	cnpm run build
pkg: gitcheck build
	npm version patch 
	npm publish
	git commit -am "$(msg)"
	git push origin HEAD

