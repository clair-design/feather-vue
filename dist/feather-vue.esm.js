var Activity = {
  name: "activity",
  render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"feather feather-activity",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('polyline',{attrs:{"points":"22 12 18 12 15 21 9 3 6 12 2 12"}})])}
};

var Airplay = {
  name: "airplay",
  render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"feather feather-airplay",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('path',{attrs:{"d":"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}}),_c('polygon',{attrs:{"points":"12 15 17 21 7 21 12 15"}})])}
};

var AlertCircle = {
  name: "alert-circle",
  render: function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"feather feather-alert-circle",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('circle',{attrs:{"cx":"12","cy":"12","r":"10"}}),_c('line',{attrs:{"x1":"12","y1":"8","x2":"12","y2":"12"}}),_c('line',{attrs:{"x1":"12","y1":"16","x2":"12","y2":"16"}})])}
};

var index = {
  Activity,
  'activity': Activity,
  Airplay,
  'airplay': Airplay,
  AlertCircle,
  'alert-circle': AlertCircle
};

export default index;
export { Activity, Airplay, AlertCircle };
