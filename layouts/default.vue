<template>
    <div>
        <MainNav />
        <Nuxt />
        <Footer />
    </div>
</template>

<style>
:focus:not(:focus-visible) {
    outline: none;
}

html {
    scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: jubilat, serif;
    font-weight: 400;
    font-style: normal;
}

p,
li,
a,
small,
span,
ul {
    font-family: poppins, sans-serif;
    font-weight: 400;
    font-style: normal;
}

.page-wrapper {
    width: 94vw;
    width: clamp(16rem, 94vw, 80rem);
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.darkTextOnPrimary {
    color: hsl(340deg 32% 12%);
}

.dash-trail:after {
    background: #743282;
    display: block;
    content: '';
    height: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 40px;
}

.script-font {
    font-family: neonoir, sans-serif;
    font-weight: 700;
    font-style: normal;
}

#about-photo {
    object-position: 0 calc(100% + 260px);
}

@media (min-width: 768px) {
    #about-photo {
        object-position: initial;
    }
}
</style>
