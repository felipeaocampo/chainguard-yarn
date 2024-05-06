import Head from "next/head";

export default function GoRedirect() {
  return (
    <>
      <Head>
        <meta
          name="go-import"
          content="chainguard.dev/go-oidctest git https://github.com/chainguard-dev/go-oidctest"
        />
        <meta
          name="go-source"
          content="chainguard.dev/go-oidctest https://github.com/chainguard-dev/go-oidctest https://github.com/chainguard-dev/go-oidctest/tree/main{/dir} https://github.com/chainguard-dev/go-oidctest/blob/main{/dir}/{file}#L{line}"
        />
        <meta
          http-equiv="refresh"
          content="0; url=https://pkg.go.dev/chainguard.dev/go-oidctest"
        />
      </Head>
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  );
}

/*
<meta name="go-import" content="chainguard.dev/go-oidctest git https://github.com/chainguard-dev/go-oidctest">
<meta name="go-source" content="chainguard.dev/go-oidctest https://github.com/chainguard-dev/go-oidctest https://github.com/chainguard-dev/go-oidctest/tree/main{/dir} https://github.com/chainguard-dev/go-oidctest/blob/main{/dir}/{file}#L{line}">
<meta http-equiv="refresh" content="0; url=https://pkg.go.dev/chainguard.dev/go-oidctest">
*/
