import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
//import ItemModel from '../models/ItemModel';

function Calendar(props) {
    const {item} = props;
    
    moment.locale('ru');
    return(
    <div class="ui-datepicker">
        <div class="ui-datepicker-material-header">
        <div class="ui-datepicker-material-day">{moment(item).format('dddd')}</div>
        <div class="ui-datepicker-material-date">
        <div class="ui-datepicker-material-day-num">{moment(item).format('DD')}</div>
        <div class="ui-datepicker-material-month">{moment(item).format('MMMM')}</div>
        <div class="ui-datepicker-material-year">{moment(item).format('YYYY')}</div>
    </div>
        </div>
        <div class="ui-datepicker-header">
            <div class="ui-datepicker-title">
            <span class="ui-datepicker-month">{moment(item).format('MMMM')}</span>&nbsp;<span class="ui-datepicker-year">{moment(item).format('YYYY')}</span>
            </div>
        </div>
        <table class="ui-datepicker-calendar">
            <colgroup >
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col class="ui-datepicker-week-end"/>
            <col class="ui-datepicker-week-end"/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="ui-datepicker-other-month">27</td>
                <td class="ui-datepicker-other-month">28</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
                <td>7</td>
                <td class="ui-datepicker-today">8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
            </tr>
            <tr>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
            </tr>
            <tr>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
            </tr>
            <tr>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td class="ui-datepicker-other-month">1</td>
                <td class="ui-datepicker-other-month">2</td>
            </tr>
            </tbody>
        </table>
        
    </div>
    );
}

// Calendar.propTypes = {
//     props: PropTypes.instanceOf(ItemModel).isRequired
//   }


export default Calendar;