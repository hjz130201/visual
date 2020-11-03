﻿function pie2(mychart,a){
    option = {
        backgroundColor: '#333333',
        color:['#FFAE57', '#FF7853', '#EA5151', '#ebdba4', '#893448'],
        title: {
            text: '研究单位继续教育任务学习参与率',
            left: 'center',
            top: 5,
            textStyle: {
                color: '#e3e3e3',
                fontSize:a*0.013
            }
        },
    
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                return params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },
        dataset:{
            source:[]
        },
    
        series : [
            {
                name:'参与率',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data: [
                    {value:26, name:'小于20%' },
                    {value:35, name:'20%~40%'},
                    {value:33, name:'40%~60%'},
                    {value:10, name:'大于60%'}
                ],
                encode:{
                    itemName:'category',
                    value:'value'
                },
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: '#e3e3e3',
                            fontSize:a*0.009
                            
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#e3e3e3'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: 'rgba(255,178,72,0.2)',
                        opacity:0.8,
                    }
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    $.get('./data/application-education.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.security);
        mychart.setOption({
            dataset:{
                source:data.attend,
            },
            
        });

    });
    
mychart.setOption(option);
    }