<script>
    export let companyLogo;
    export let title;
    export let companyName;
    export let companyLocation;
    export let isFullTime;
    export let vacancyDate;

    let gray = '#b8bdcf';
</script>

<div class="vacancy">
    <div class="content">
        <img src={companyLogo} class="image" alt="">
        <div class="info">
            <a href="#" class="title">{title}</a>
            <div class="company">
                <div class="company__name _icon-briefcase">
                    <span>{companyName}</span>                   
                </div>
                <div class="company__location _icon-location_on">
                    <span>{companyLocation}</span>
                </div>
            </div>
        </div>
        <div class="operating">
            {#if isFullTime}
                <span class="operating__mode">Full Time</span>
            {:else}
                <span class="operating__mode part-time">Part Time</span>
            {/if}
            <div class="date _icon-calendar-alt-stroke">
                <span>{vacancyDate}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .vacancy {
        margin: 0px 0px 35px 0px;
    }
    .content {
        display: grid;
        grid-template-columns: 10% 1fr auto;
        border-bottom: 2px solid lightgray;
        padding: 0px 0px 30px 0px;
    }
    .image {
        width: 55px;
        height: 55px;
        background-color: yellow;
        border-radius: 12px;
    }
    .title {
        font-size: 20px;
        display: block;
        margin: 0px 0px 10px 0px;
    }
    .company {
        display: flex;
        font-size: 14px;
    }
    .company span {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        font-weight: 500;
        color: #b8bdcf;
        margin: 0px 0px 0px 8px;
    }
    .company__name {
        margin: 0px 40px 0px 0px;
    }
    .company__name::before, .company__location::before {
        color: #b8bdcf;
    }
    .company__location {
    }
    .operating {
        display: inline-flex;
        flex-direction: column;
        align-items: end;
        font-size: 14px;
    }
    .operating__mode {
        width: 90px;
        padding: 5px;
        background-color: #d7ffe0;
        border-radius: 24px;
        text-align: center;
        font-weight: bold;
        margin: 0px 0px 10px 0px;
    }
    .part-time {
        background-color: #fee7d6;
    }
    .date::before {
        color: #b8bdcf;
    }
    .date span {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        font-weight: 500;
        color: #b8bdcf;
        margin: 0px 0px 0px 8px;
    }
</style>