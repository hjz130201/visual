    
    var lineStyle = {
        normal: {
            width: 1.5,
            opacity: 0.5
        }
    };
 
function rad1(chart,a){
    option = {
        backgroundColor: '#333333',
        // title: {
        //     text: '研究单位通过教育云平台完成工作情况',

        //     x:'center',//水平位置：居中
        //     top:8,//垂直位置
        //     textStyle: {
        //         color: '#e3e3e3',
        //         lineHeight:0,
        //         fontSize:'130%'
        //     },
 
        // },

        center:['50%','50%'],
        radar: {
            indicator: [
                { name: '在线课程学习', max: 103},
                { name: '个人学习空间', max: 103},
                { name: '个性化学习管理', max: 103},
                { name: '网络互动交流', max: 103},
                { name: '其他', max: 103}
                        
                ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)',
                    fontSize:a*0.008,
                },
                lineHeight: a*0.01,
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)','rgba(238, 197, 102, 1)'
                    ].reverse(),
                },
    
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)',
                    
                }
            }
        },
        series: [
            {
                name: '研究所',
                type: 'radar',
                lineStyle: lineStyle,
                data : [
                    {
                        value: [94, 69, 64, 63, 20],
                    },
                    
                ],
                itemStyle: {
                    show:true,
                    normal: {
                        color: '#F9713C',
                        label: {				          
                            show: true,				          
                            position: [14,-5],		          
                            textStyle: {				            
                                color: 'rgb(238, 197, 102)',
                                fontSize:a*0.008,		      
                            }
                        }		
                        
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            }
        ],
    };


    
    $.get('./data/application-education.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: [{  
                name: '研究所',
                data: [
                    {
                        value : data.rad1,
                    },
                    
                ],
            }]
        });

    });
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
