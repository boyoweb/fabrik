var FbBirthday=new Class({Extends:FbElement,initialize:function(b,a){this.plugin="birthday";this.parent(b,a)},getValue:function(){var a=[];if(!this.options.editable){return this.options.value}this.getElement();this._getSubElements().each(function(b){a.push(b.get("value"))});return a},update:function(a){if(typeOf(a)==="string"){a=a.split(this.options.separator)}this._getSubElements().each(function(c,b){c.value=a[b]})}});
