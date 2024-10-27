document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有帶有 show-modal class 的連結
    const modalLinks = document.querySelectorAll('.show-modal');
    
    modalLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 獲取對應的 modal ID
            const modalId = link.dataset.target;
            const modal = document.getElementById(modalId);
            
            // 開啟對應的 modal
            modal.classList.add('is-active');
            
            // 關閉按鈕事件
            const closeBtn = modal.querySelector('.modal-close');
            const background = modal.querySelector('.modal-background');
            
            // 點擊關閉按鈕關閉
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('is-active');
            });
            
            // 點擊背景關閉
            background.addEventListener('click', () => {
                modal.classList.remove('is-active');
            });
        });
    });
    
    // ESC 鍵關閉所有 modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.is-active').forEach(modal => {
                modal.classList.remove('is-active');
            });
        }
    });
});