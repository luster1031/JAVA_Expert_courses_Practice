# ex06: Composition

```js
const SiteLayout = ({Children}) => {
    return (
        <Fragment>
            <Header />
            <div className={styles.Content}>
                {Children}
            </div>
            <Navigation />
            <Footer />
        </Fragment>
    )
}
```

```js
<SiteLayout>
    <div className={styles.Main}>
        <h2>Main</h2>
    </div>
</SiteLayout>
```

+ `{Childeren}` 에 포함시킴

