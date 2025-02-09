// 初始化图表
function initCharts() {
    const ctx = document.getElementById('financeChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['必要支出', '投资理财', '紧急储备'],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// 表单提交处理
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('表单数据：', data);
    // TODO: 处理表单数据并更新图表
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    
    // 绑定表单提交事件
    const form = document.getElementById('financialForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // 导航链接点击处理
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}); 