(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"206a":function(e,i,n){"use strict";n.r(i),i["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-vertical-expansion-group\n      multiple\n      style="height: 400px;">\n      <q-vertical-expansion-item\n        v-for="tab in tabs"\n        :key="tab.index"\n        :label="\'title - \' + tab.index"\n        separator\n        icon="calendar_today"\n        expandIcon="expand_more"\n        expandedIcon="expand_less"\n      >\n        {{ lorem }}\n      </q-vertical-expansion-item>\n    </q-vertical-expansion-group>\n  </div>\n</template>\n\n<script>\nconst model = [...Array(7).keys()].map(i => ({ index: i }))\n\nexport default {\n  data () {\n    return {\n      tabs: model,\n      lorem: \'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum ex, aliquet sit amet semper a, dapibus id elit. Mauris nibh orci, lacinia at ex ut, mattis ultricies ante. In congue nunc mauris, vehicula aliquam neque pretium non. Aenean interdum a libero in vulputate. Praesent est eros, facilisis ut leo sit amet, ultricies mattis mi. Pellentesque ornare enim ut lacus eleifend, dignissim ornare nisl pharetra. Etiam commodo tortor risus, id feugiat nisi faucibus id. Nunc pellentesque tortor quis iaculis facilisis. Donec accumsan dui vitae orci faucibus, ac lacinia nunc molestie. Morbi mollis commodo ante quis condimentum.\'\n    }\n  }\n}\n<\/script>\n'}}]);