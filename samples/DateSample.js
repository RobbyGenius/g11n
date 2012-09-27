enyo.kind({
	name: "g11n.sample.DateSample",
	kind: "FittableRows",
	components: [
		{kind: "onyx.Toolbar", content:$L("Dates")},
		{kind: "FittableColumns", components:[
			{components: [
				{content:$L("Pick a Locale to use:")},		
				{kind: "onyx.PickerDecorator", style:"padding:10px;", onSelect: "pickerHandler", components: [
					{content: "Pick One...", style: "width: 200px"},
					{kind: "onyx.Picker", components: [
						{content: 'en_us', active:true},
						{content: 'en_ca'},
						{content: 'en_ie'},
						{content: 'en_gb'},
						{content: 'en_mx'},
						{content: 'de_de'},
						{content: 'fr_fr'},
						{content: 'fr_ca'},
						{content: 'it_it'},
						{content: 'es_es'},
						{content: 'es_mx'},
						{content: 'es_us'}																																																								
					]}
				]}
			]},
			{style:"padding-left:60px;", components:[
				{name:"currentLocale"},			
				{name:"language"},
				{name:"dialect"},
				{name:"timezone"}				
			]},					
		]},
		{style:"width:100%;height:5px;background-color:black;margin-bottom:5px;"},
		{caption: "Dates", components: [
			{name:"dateExample"},
			
		//	{content:"In Progress", style:"padding-top:50px;color:red"},
		//	{kind:"DateTimePicker"}				
		]}
	],
	initComponents: function() {
		this.inherited(arguments);
				
		var locale = enyo.g11n.currentLocale().getLocale();
       	this.$.currentLocale.setContent("System locale = " + locale);
        this.$.language.setContent("System language = " + locale.language);
        this.$.dialect.setContent("System region = " + locale.region);
		this.$.timezone.setContent("System timezone = " + (new enyo.g11n.TzFmt()).getCurrentTimeZone());

		this.format(locale);
	},
	pickerHandler: function(inSender, inEvent){
		this.format(inEvent.selected.content);
	},
	format: function(locale){
		this.formatDates(locale);
	},
	formatDates: function(locale){
		var fmt = new enyo.g11n.DateFmt({
		     date: "short",
		     time: "short",
		     locale: new enyo.g11n.Locale(locale)
		});
		this.$.dateExample.setContent("Current date in " + locale + " = " + fmt.format(new Date()));
	}
});
