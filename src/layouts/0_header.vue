<template>
    <q-layout-header :class="{outSide: outSider, 'shadow-0': !outSider}">
        <q-toolbar class="q-pa-none headBar" :class="{bigHead: !outSider}">

            <!-- MOBILE -->
            <div class="mobile lt-md">
                <q-btn :class="{bigHead: !outSider}" class="mobBtn" flat icon="email" @click="openURL('mailto:info@kfz-albrink.de')" />
                <q-btn :class="{bigHead: !outSider}" class="mobBtn" flat icon="location_on" @click="openURL('https://www.google.com/maps/dir/?api=1&destination=Albrink+Kfz-Meisterbetrieb,+Lagesche+Str.+105A,+32108+Bad+Salzuflen&travelmode=driving')" />
                <q-btn :class="{bigHead: !outSider}" class="mobBtn" flat icon="phone" @click="openURL('tel:+495222-21069')" />
                <q-btn :class="{bigHead: !outSider}" class="mobBtn" flat dense @click="toggleDaDrawer"><hamburger></hamburger></q-btn>
            </div>

            <!-- DESKTOP -->
            <div class="deskwrap gt-sm">
                <q-toolbar-title class="deskTitle">
                    <img :class="{bigLogoHead: !outSider}" src="../statics/logo/kfzalbrink3.png" alt="">
                    <h6 :class="{bigTxtHead: !outSider}">KFZ-Albrink</h6>
                </q-toolbar-title>
                <div class="deskBtn quickLaunch">
                    <q-btn class="mobBtn" flat icon="email" @click="openURL('mailto:info@kfz-albrink.de')" />
                    <q-btn class="mobBtn" flat icon="location_on" @click="openURL('https://www.google.com/maps/dir/?api=1&destination=Albrink+Kfz-Meisterbetrieb,+Lagesche+Str.+105A,+32108+Bad+Salzuflen&travelmode=driving')" />
                    <q-btn class="mobBtn" flat icon="phone" @click="openURL('tel:+495222-21069')" />
                </div>
                <div class="desktop">
                    <q-tabs :value="selectedTab">
                        <!-- Tabs - notice slot="title" -->
                        <q-tab slot="title" label="Home" name="sect2" v-scroll-to="'#sect2'" />
                        <q-tab slot="title" label="Leistung" name="sect3" v-scroll-to="'#sect3'" />
                        <q-tab slot="title" label="Team" name="sect4" v-scroll-to="'#sect4'" />
                        <q-tab slot="title" label="Kontakt" name="sect5" v-scroll-to="'#sect5'" />
                    </q-tabs>
                </div>
            </div>

            <!-- DRAWER -->
            <drawor></drawor>

        </q-toolbar>
    </q-layout-header>
</template>


<script>
    import { openURL } from 'quasar'   // for tel links etc.
    import hamburger from '../myM/i_hamburger'
    import drawor from './0_drawer.vue'


    export default {
        components: {
            hamburger,
            drawor
        },
        methods: {
            openURL,
            toggleDaDrawer() {
                this.$store.state.showDrawer = !this.$store.state.showDrawer;
            }
        },
        computed: {     // basic states
            selectedTab() {   // selected tab from store
                return this.$store.state.daWaypoint
            },
            outSider() {    // header is outside of start
                return this.$store.state.homyOut
            }
        }
    }
</script>


<style>
    header {
        transition: all 0.3s linear !important;
    }
    header * {
        color: white !important;
    }
    header.outSide {
        -webkit-box-shadow: 0px 9px 31px 1px rgba(0,0,0,0.64);
        -moz-box-shadow: 0px 9px 31px 1px rgba(0,0,0,0.64);
        box-shadow: 0px 9px 31px 0px rgba(0,0,0,0.44);
    }
    .mobile {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mobBtn {
        font-size: 20px;
        height: 50px;
        width: 30%;
        padding: 0px;
    }
    .deskwrap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .deskTitle {
        display: flex !important;
        align-items: center;
        min-width: 215px;
        padding-left: 13px;
    }

    .q-toolbar-title {
        display: inline-block;
        width: 25%;
    }
    .deskBtn {
        height: 50px;
        padding: 0px;
        width: 25%;
    }
    .deskwrap .desktop {
        width: 50%;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
    }
    .q-tab {
        padding: 0px 2vw;
    }

    .deskwrap img {
        transition: all 0.2s linear;
        width: 10%;
    }
    .deskwrap h6 {
        transition: all 0.2s linear;
        margin: 0px;
        margin-left: 10px;
        font-size: 20px !important;
    }
/* BIGHEAD */
    .headBar {
        height: 50px;
        transition: height 0.2s linear;
    }
    .bigHead {
        height: 100px;
    }
    .bigLogoHead {
        /* height: 70px;
        width: 70px !important; */
        width: 15% !important;
    }
    h6.bigTxtHead {
        font-size: 25px !important;
    }
</style>
