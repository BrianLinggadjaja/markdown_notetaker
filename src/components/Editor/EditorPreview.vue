<template>
    <b-navbar>
        <template slot="start">
            <b-navbar-item>
                <b-button size="is-small">New</b-button>
                <b-button size="is-small">Tag</b-button>
                <b-button size="is-small">Delete</b-button>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
