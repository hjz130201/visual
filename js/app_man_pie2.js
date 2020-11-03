function pie21(mychart,a){
        
    option = {
        backgroundcolor:'#333333',
        color:['#ebdba4','#FFAE57', '#FF7853' ,'#EA5151', '#893448'],
        
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return '新一代ARP系统培训' + params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
            }
        },

        dataset:{
            source:[
                ['product','新一代ARP系统培训'],
                ['<5次',59],
                ['5~10次',38],
                ['10~15次',6],
                ['15~20次',1]
            ]
        },
        legend: {
            orient: 'vertical',
            //x: 'right',
            data:['<5次','5~10次','10~15次','15~20次'],
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009
            },
            itemGap:20,
            type:'scroll',
            top:'20%',
            right:a*0.003,
            
            
        },
        series: [
            {
                name:'新一代ARP系统培训',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: a*0.013,
                            fontWeight: 'bold'
                        },
                    formatter:'{a}: \n{b}',
                    lineHeight:a*0.015,
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
                source:data.submantain,
            },
            
        });

    });
    mychart.setOption(option);
}

    function pie22(mychart,a){
        option = {
            backgroundcolor:'#333333',
            color:['#FFAE57', '#FF7853' ,'#EA5151', '#893448'],
            
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return '录入预算' + params.value[0] +': ' + params.value[1]+'家 (' + ((params.value[1]/103)*100).toFixed(2) + '%)';
                }
            },
    
            dataset:{
                source:[
                    ['product','ARP系统基础操作培训'],
                    ['<200人次',74],
                    ['200~400人次',19],
                    ['400~600人次', 7],
                    ['>600人次', 4]
                ]
            },
            legend: {
                orient: 'vertical',
                //x: 'right',
                data:['<200人次','200~400人次','400~600人次','>600人次',],
                textStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.009
                },
                itemGap:20,
                top:'20%',
                right:a*0.003,
                type:'scroll',
                
            },
            series: [
                {
                    name:'ARP系统基础操作培训',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: a*0.013,
                                fontWeight: 'bold'
                            },
                        formatter:'{a}: \n{b}',
                        lineHeight:a*0.015,
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
                    source:data.budget,
                },
                
            });
    
        });
    mychart.setOption(option);
    }

