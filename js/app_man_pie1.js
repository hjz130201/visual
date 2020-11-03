﻿function pie11(mychart,a){
        
    option = {
        backgroundcolor:'#333333',
        color:['#FFAE57', '#EA5151', '#ebdba4', '#893448'],
        
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/722)*100).toFixed(2) + '%)';
            }
        },

        dataset:{
            source:[
                ['product','ARP公文系统'],
                ['充分应用', 61],
                ['一般应用', 42]
            ]
        },
        legend: {
            orient: 'vertical',
            //x: 'right',
            data:["充分应用", "一般应用"],
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009
            },
            type:'scroll',
            itemGap:20,
            top:'20%',
            right:a*0.003
            
        },
        series: [
            {
                name:'ARP公文系统',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        //formatter:''
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: a*0.013,
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            }
        ]
    };

    $.get('./data/application-manage.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.arpdoc,
            },
            
        });

    });
    mychart.setOption(option);
}

    function pie12(mychart,a){
        
        option = {
            backgroundcolor:'#333333',
            color:['#ebdba4','#FF7853',  '#893448','#FFAE57', '#EA5151'],
            
            tooltip: {
                trigger: 'item',
                formatter:  '{a} <br/>{b}: {c}家 ({d}%)',
            },
    
            dataset:{
                source:[
                    ['product','ARP接口'],
                    ['利用ARP接口',358],
                    ['未利用ARP接口', 436]
                ]
            },
            legend: {
                orient: 'vertical',
                show:true,
                //x: 'right',
                data:["利用ARP接口", "未利用ARP接口"],
                textStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.009
                },
                itemGap:20,
                top:'20%',
                right:a*0,
                type:'scroll',
            },
            series: [
                {
                    name:'ARP接口',
                    type:'pie',
                    data:[
                        {value: 358, name:'利用ARP接口'},
                        {value: 436, name:'未利用ARP接口'}
                    ],
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: a*0.013,
                                fontWeight: 'bold'
                            },
                            
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                }
            ]
        };
    
        $.get('./data/application-manage.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.std)
                data = JSON.parse(data);
                //alert('1'+data.year)
            }
            //alert(data.security);
            mychart.setOption({
                dataset:{
                    source:data.arpinterface,
                },
                
            });
    
        });
    mychart.setOption(option);
    }